function teemboom_comments_load(){
	let page_url = `${location.host}${location.pathname}`;
	let teemboom_url = 'https://teemboom.com'
	let config;

	if (location.host.startsWith('localhost') || location.host.startsWith('127.0.0.') || location.host.startsWith('file')){
		let unique_id = localStorage.getItem('teemboomlocalhost')
		if (!unique_id){
			unique_id = crypto.randomUUID()
			localStorage.setItem('teemboomlocalhost', unique_id)
		}
		page_url = `localhost@${unique_id}${location.pathname}`
	}

	fetch(`${teemboom_url}/teemboom_config`, {
		'headers': {'Content-type': 'application/json'},
		'method': 'POST',
		'body': JSON.stringify({'page_id': page_url})
	})
	.then(res=>{return res.json()})
	.then(response=>{
		if (!response.status) return
		config = response.data
		config.teemboom_url = teemboom_url
		let theme_css = document.createElement('link')
		theme_css.setAttribute('href', `${teemboom_url}/static/app/dist/theme/${config.theme}/teemboom_theme.css`)
		theme_css.setAttribute('rel', 'stylesheet')
		theme_css.setAttribute('id', 'temboom_css')
		document.head.appendChild(theme_css)

		let theme_js = document.createElement('script');
		theme_js.onload = ()=>{
			teemboom_app(config)
		}
		theme_js.setAttribute('src',`${teemboom_url}/static/app/dist/theme/${config.theme}/teemboom_app.js`)
		document.head.appendChild(theme_js);		
	})
}
teemboom_comments_load()


class teemboomCommentsClass{
	constructor(obj){
		this.config = obj.config
		this.populate = obj.populate
		this.add_comment = obj.add_comment
		this.add_reply = obj.add_reply
		this.teemboom_url = obj.config.teemboom_url
		this.main_profile_id = obj.main_profile_id
		this.comments_box_id = obj.comment_box_id
		this.like_number_class = obj.like_number_class
		this.dislike_number_class = obj.dislike_number_class
		this.load()
	}

	page_url = `${location.host}${location.pathname}`;
	socket = false;
	send_text;
	comments_box;
	metrics_box;
	comments_no = 0;
	main_div;
	session_id = null
	user = false
	default_hex = ["FFCC66", "99CCCC", "FF6666", "CC99FF", "4285F4", "FF6666", "66CCCC", "FF9966", "5555FF", "66CC99"]

	load(){
		if (location.host.startsWith('localhost') || location.host.startsWith('127.0.0.') || location.host.startsWith('file')){
			let unique_id = localStorage.getItem('teemboomlocalhost')
			if (!unique_id){
				unique_id = crypto.randomUUID()
				localStorage.setItem('teemboomlocalhost', unique_id)
			}
			this.page_url = `localhost@${unique_id}${location.pathname}`
			console.log('TeemBoom localhost ID: ' + unique_id)
		}

		this.main_div = document.getElementById('teemboom_comments')
		if (this.main_div){
			this.main_div.className = 'teemboom_root'
		}else if (document.getElementById('teemboom_popup')){
			let popup_button = document.getElementById('teemboom_popup')
			let cover_div;
			let cover_div_state = false
			const popup_toogle = ()=>{
				if (cover_div_state) {cover_div.style.display = 'none'; cover_div_state = false}
				else {cover_div.style.display = 'block'; cover_div_state = true}
			}
			popup_button.addEventListener('click', popup_toogle)
			cover_div = document.createElement('section')
			cover_div.id = 'teemboom_comments_popup'
			cover_div.className = 'teemboom_root'
			let popup_close = document.createElement('div')
			popup_close.id = 'teemboom_popup_close'
			popup_close.innerHTML = '<p>X</p>'
			popup_close.addEventListener('click', popup_toogle)
			cover_div.appendChild(popup_close)
			this.main_div = document.createElement('div')
			this.main_div.id = 'teemboom_comments'
			cover_div.appendChild(this.main_div)
			document.body.appendChild(cover_div)
		}
		else{
			this.main_div = document.createElement('section')
			this.main_div.id = 'teemboom_comments'
			this.main_div.className = 'teemboom_root'
			document.body.appendChild(this.main_div)
		}
		this.admin_config()
		this.populate()
		this.identification()

	}

	admin_config(){	
		let style_rule = '.teemboom_root{'
		let mainColors = this.config.style.colors.main
		for (let style in mainColors){
			style_rule += `--teemboom-${style}: ${mainColors[style]};`
		}
		let font = this.config.style.font.normal
		for (let style in font){
			let px = ''
			if (style == 'font_size') px = 'px'
			style_rule += `--teemboom-${style}: ${font[style]}${px};`
		}
		style_rule += '}'
		
		let styleElement = document.createElement('style')
		styleElement.appendChild(document.createTextNode(style_rule))
		document.head.appendChild(styleElement)
		if (this.config.live_chat) {
			this.live_chat()
		}
	}

	getComments(){
		fetch(`${this.teemboom_url}/teemboom_comments`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({'page_id': this.page_url})
		})
		.then(res=>{return res.json()})
		.then(json=>{
			if (!json.status) return
			for (let data of json.data.comments){
				this.add_comment(data, json.data.comments_no)
			}
		})
	}

	submit_comment(){
		let comment_box = document.getElementById(this.comments_box_id)
		let comment = comment_box.value
		if (comment == '' || /[A-Za-z0-9]/.test(comment) == false || comment.length > 1000) return;
		let user = this.get_user()
		if (!user) return
		comment_box.value = ''
		console.log(user)
		fetch(`${this.teemboom_url}/submit_comment`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				'content': comment, 
				'user': user, 
				'page_id': this.page_url
			})
		})
		.then((res)=>{return res.json()})
		.then((json)=>{
			if (!json.status) return
			if (this.config.live_chat){
				this.socket.emit('spread_comment', {'room': this.page_url, 'comment': json.data})
			}else{
				if (this.config.auth_comments) {
					let markup = [
						['header', 'Thank you! <br><br> Your comment has been submitted and will be reviewed.'],
					]
					this.new_popup(markup)
				}
				else this.add_comment(json.data)
			}
		})
	}

	submit_reply(comment_id, input){
		let reply = input.value
		if (reply == '' || /[A-Za-z0-9]/.test(reply) == false) return;
		let user = this.get_user()
		if (!user) return
		
		input.value = ''
		fetch(`${this.teemboom_url}/submit_comment_reply`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				'content': reply,
				'user': this.user,
				'page_id': this.page_url,
				'comment_id': comment_id
			})
		})
		.then(res=>{return res.json()})
		.then(json=>{
			if (!json.status) return
			if (this.config.live_chat){
				this.socket.emit('spread_reply', {'room': this.page_url, 'comment': json.data})
			}else{
				if (this.config.auth_comments) {
					let markup = [
						['header', 'Thank you! <br><br> Your reply has been submitted and will be reviewed.'],
					]
					this.new_popup(markup)
				} else	this.add_reply(json.data)
			}
		})
	}

	like_comment(comment_id){
		let user = this.get_user()
		if (!user) return
		fetch(`${this.teemboom_url}/like_comment`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				'user': user,
				'page_id': this.page_url,
				'comment_id': comment_id
			})
		})
		.then(res=>{return res.json()})
		.then(json=>{
			if (!json.status) return
			if (this.config.live_chat){
				this.socket.emit('spread_like', {'room': this.page_url, 'data': json.data})
			}else{
				this.add_like(json.data)
			}
		})
	}

	dislike_comment(comment_id){
		let user = this.get_user()
		if (!user) return
		fetch(`${this.teemboom_url}/dislike_comment`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				'user': user,
				'page_id': this.page_url,
				'comment_id': comment_id
			})
		})
		.then(res=>{return res.json()})
		.then(json=>{
			if (!json.status) return
			if (this.config.live_chat){
				this.socket.emit('spread_dislike', {'room': this.page_url, 'data': json.data})
			}else{
				this.add_dislike(json.data)
			}
		})
	}

	add_like(data){
		let comment = document.getElementById('teemboom_comment_'+ data.comment_id)	
		let likes = comment.querySelector('.' + this.like_number_class)
		if (data.action == 1){
			likes.innerText = Number(likes.innerText) + 1
		}else{
			likes.innerText = Number(likes.innerText) - 1
		}
	}

	add_dislike(data){
		let comment = document.getElementById('teemboom_comment_'+ data.comment_id)	
		let dislikes = comment.querySelector('.' + this.dislike_number_class)
		if (data.action == 1){
			dislikes.innerText = Number(dislikes.innerText) + 1
		}else{
			dislikes.innerText = Number(dislikes.innerText) - 1
		}
	}

	get_user(){
		if (this.config.identification == '1'){
			// TODO if config is 1, username should be 'Guest<random_string> to identify the user
			// This string would be stored in session
			this.user = {}
			this.user.username = 'Guest'
			return this.user
		}
		if (this.config.identification == '2'){
			if (this.user === false || !this.user.username || this.user.username === null){ // If the user is not signed in
				let markup = [
					['header', 'Enter Your Username', false],
					['input', false, {
						'placeholder': 'Username', 'id': 'teemboom_lev2_username',
						'onkeydown': (e)=>{if (e.key === 'Enter') this.identification2_sign_in();}
					}],
					['button', 'Set', {'onclick': ()=>{this.identification2_sign_in()}}]
				]
				this.new_popup(markup)
				return false
			}
			return this.user
		}
		if (this.config.identification == '3'){
			if (this.user === false || !this.user.username || this.user.username === null){ // If the user is not signed in
				let markup = [
					['label', 'Username', false],
					['input', false, {'placeholder': 'Username', 'id': 'teemboom_lev3_username'}],
					['label', 'Email', false],
					['input', false, {'placeholder': 'Email', 'type': 'email', 'id': 'teemboom_lev3_email'}],
					['h6', false, {'id': 'teemboom_lev3_error'}],
					['button', 'Set', {'onclick': ()=>{this.identification3_sign_in()}}]
				]
				this.new_popup(markup)
				return false
			}
			return this.user
		}
		if (this.config.identification == '4'){
			if (this.user === false || !this.user.username || this.user.username === null){
				let markup = [
					['header', 'Login', false],
					['button', '<svg width="64px" height="64px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47"></path><path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4"></path><path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00"></path><polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"></polygon><path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435"></path><polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"></polygon><path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4"></path></g></svg><p>Google</p>', {
						'className': 'teemboom_popup_social', 
						'style': {'background': '#5f9bff', 'color': '#fff'}, 
						'onclick': ()=>{this.identification4_sign_in('google')}}],
				]
				this.new_popup(markup)
				return false
			}
			return this.user
		}
		return false
	}

	sign_in(user={}){
		if (user == {}) return;
		if (user['username']){
			let value = user['username']
			if (value == '' || /[A-Za-z0-9]/.test(value) == false) {return;}
		}
		let args = {}
		args.id_level = this.config.identification
		args.session_id = this.getCookie('session_id')
		fetch(`${this.teemboom_url}/user_signin`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({args, user})
		})
		.then(res=>{return res.json()})
		.then(json=>{
			if (json.session_id){
				this.setCookie('session_id', json.session_id)
				this.user = user
				if (this.user.profile_pic) this.profile_pic(this.user.profile_pic, document.getElementById(this.main_profile_id))
				else this.profile_avatar(this.user.username, document.getElementById(this.main_profile_id))
			}
		})
	}

	logout(){
		let session_id = this.getCookie('session_id')
		fetch(`${this.teemboom_url}/user_clear_session`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({'session_id': session_id, 'level': this.config.identification })
		}).then(res=>{return res.json()})
		.then(res=>{
			this.comments_no = 0
			this.populate()
			this.identification()
		})
	}
	setCookie(name, value) {
	    document.cookie = `${name}=${value}; path=/; SameSite=None; Secure`;
	    localStorage.setItem(name, value)
	}
	getCookie(name) {
		let value = "; " + document.cookie;
		let parts = value.split("; " + name + "=");
		let cookie_value;
		if (parts.length === 2) cookie_value = parts.pop().split(";").shift();
		if (!cookie_value) cookie_value = localStorage.getItem(name)
		return cookie_value;
	}
	
	identification(){
		let session_id = this.getCookie('session_id')
		if (!session_id) return

		fetch(`${this.teemboom_url}/user_get_session`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({'session_id': session_id, 'level': this.config.identification })
		})
		.then(res=>{return res.json()})
		.then(json=>{
			this.user = json
			if (!this.user) {this.user = false}
			if (this.user.profile_pic) {
				this.profile_pic(this.user.profile_pic, document.getElementById(this.main_profile_id))
			}
			else if(this.user.username) {
				this.profile_avatar(this.user.username, document.getElementById(this.main_profile_id))
			}
			
		})
	}
	identification2_sign_in(value=false){
		if (!value) value = document.getElementById('teemboom_lev2_username').value
		this.sign_in({'username': value})
		this.popup_close()
	}
	identification3_sign_in(){
		let username = document.getElementById('teemboom_lev3_username').value
		let email = document.getElementById('teemboom_lev3_email').value
		let error = document.getElementById('teemboom_lev3_error')
		// TODO
		if (username == '' || email == '') {
			error.innerHTML = 'Bad Credentials'
			return
		}
		this.sign_in({'username': username, 'email': email})
		this.popup_close()
	}
	identification4_sign_in(value){
		if (value == 'google'){
			const openGoogleSignInPopup = () => {
				const clientId = '360201050801-r60i04v2j4f83ilmus698vtgcq16a5ng.apps.googleusercontent.com';
				const redirectUri = `${this.teemboom_url}/google_auth_callback`;
				
				const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
					`client_id=${encodeURIComponent(clientId)}&` +
					`redirect_uri=${encodeURIComponent(redirectUri)}&` +
					`response_type=code&` +
					`scope=${encodeURIComponent('openid email profile')}&`;
	
				const popup = window.open(authUrl, 'google-signin', 'width=500,height=600');
				
				window.addEventListener('message', (event) => {
					// Check the origin of the message for security purposes
					// if (event.origin === 'https://your-popup-origin.com') {
					// 	console.log('Received message from popup:', event.data);
					// }
					this.sign_in(event.data)
					this.popup_close()
				}, false);
			}
			openGoogleSignInPopup()
		}
	}

	
	profile_dropdown(){
		let markup = [
			['div', false, {'id': 'teemboom_profile_popup_pfp'}],
			['h6', this.user.username, false],
			['button', 'Log Out', {'onclick': ()=>{
				this.logout()
			}}]
		]
		if (!this.user || !this.user.username){
			if (this.config.identification == 1){
				markup[1][1] = 'Anonymous. No authentication requried'
				markup.pop()
			}else{
				markup[1][1] = 'Not Signed in'
				markup[2] = ['button', 'Sign in', {'onclick': ()=>{
					this.get_user()
				}}];
			}
		}
		this.new_popup(markup)
		if (this.user.profile_pic) this.profile_pic(this.user.profile_pic, document.getElementById('teemboom_profile_popup_pfp'))
		else this.profile_avatar(this.user.username, document.getElementById('teemboom_profile_popup_pfp'))
	}

	live_chat(){
		// Load the socketio client script
		let socketio_script = document.createElement('script');
		socketio_script.onload = ()=>{
			this.socket = io('https://socket.teemboom.com');
			this.socket.emit('join_room', {'room': this.page_url})
			this.socket_connections()
		}
		socketio_script.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js')
		socketio_script.setAttribute('integrity', "sha512-q/dWJ3kcmjBLU4Qc47E4A9kTB4m3wuTY7vkFJDTZKjTs8jhyGQnaUrxa0Ytd0ssMZhbNua9hE+E7Qv1j+DyZwA==")
		socketio_script.setAttribute('crossorigin', "anonymous");
		document.head.appendChild(socketio_script);
	}

	socket_connections(){
		// Functions to handle socket events
		this.socket.on('display_comment', (data)=>{
			this.add_comment(data)
		})
		this.socket.on('display_reply', (data)=>{
			this.add_reply(data)
		})
		this.socket.on('display_like', (data)=>{
			this.add_like(data)
		})
		this.socket.on('display_dislike', (data)=>{
			this.add_dislike(data)
		})
	}

	profile_avatar(name, div){
		if (!name) name='Anonymous'
		let random_hex_color = name[0].charCodeAt(0) % this.default_hex.length
		random_hex_color = this.default_hex[random_hex_color]
		div.innerText = name[0].toUpperCase()
		div.style.background = '#'+random_hex_color
		div.style.color = '#ffffff'
	}
	profile_pic(url, div){
		let img = document.createElement('img')
		img.src = url
		div.innerHTML = ''
		div.appendChild(img)
		div.classList.add('teemboom_profile_pic')
	}

	report_item(reason, comment_id, reply_id){
		let user = this.get_user()
		if (!user) return
		fetch(`${this.teemboom_url}/report_comment`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				comment_id: comment_id,
				reply_id: reply_id,
				page_id: this.page_url,
				user: user,
				reason: reason
			})
		})
		.then(res=>{return res.json()})
		.then(json=>{
		})
	}

	report_popup(comment_id, reply_id=false){
		let user = this.get_user()
		if (!user) return
		let markup = [
			['header', 'Report Comment', false],
			['textarea', false, {'maxlength': '80', 'id': 'report_text_area_t'}],
			['button', 'Report', {'onclick': ()=>{
				let message = document.getElementById('report_text_area_t').value
				if (message == '' || /[A-Za-z0-9]/.test(message) == false) {
					return;
				}
				this.popup_close()
				this.report_item(message, comment_id, reply_id)
			}}]
		]
		let markup_selection = [
			['header', 'Select Reason', false],
			['button']
		]
		this.new_popup(markup)
	}

	new_popup(markdown=[], settings={}){
		this.popup_close()
		let main = document.createElement('div')
		main.className = 'teemboom_popup_main'
        if (settings.id){main.id=id}
        let popup = document.createElement('div')
        popup.className = 'teemboom_popup'
        let popup_close = document.createElement('div')
        popup_close.className = 'teemboom_popup_close'
        popup_close.innerText = 'x'
        popup_close.addEventListener('click', (e)=>{this.popup_close()})
        popup.appendChild(popup_close)
		let got_input = false
        for (let markup of markdown){
			let elem = document.createElement(markup[0])
			if (markup[1]){elem.innerHTML = markup[1]}
			if (markup[2]){
				for (let key in markup[2]){
					if (key == 'style'){
						for (let style in markup[2][key]){
							elem.style[style] = markup[2][key][style]
						}
					}
					else{
						elem[key] = markup[2][key]
					}
				}
			}
			popup.appendChild(elem)
			if (got_input == false){
				if (markup[0] == 'input'){
					setTimeout(() => {elem.focus()}, 100);
					got_input = true
				}
			}
        }
		let partition = document.createElement('div')
		partition.className = 'teemboom_popup_partition'
		partition.onclick = ()=>{
			this.popup_close()
		}
		main.appendChild(partition)
		main.appendChild(popup)
        this.main_div.appendChild(main)
	}

	popup_close(id=false){
		if (id) {document.getElementById(id).remove()}
		else{
			let popups = document.getElementsByClassName('teemboom_popup_main')
			for (let p of popups){p.remove()}
		}
	}
}
