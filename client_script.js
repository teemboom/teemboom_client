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
		'body': JSON.stringify({'id': page_url})
	})
	.then(res=>{return res.json()})
	.then(json=>{
		config = json
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
		let emoji_js = document.createElement('script');
		emoji_js.onload = () => {
			// new EmojiPicker({
			// 	trigger: [
			// 		{
			// 			selector: '#teemboom_send_text',
			// 			insertInto: ['#teemboom_send_text'] // '.selector' can be used without array
			// 		}
			// 	],
			// 	closeButton: true
			// });
		}
		emoji_js.setAttribute('src', `${teemboom_url}/static/app/dist/emoji.js`)
		document.head.appendChild(emoji_js);
		
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
	user = null
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
			popup_button.addEventListener('click', ()=>{popup_toogle()})
			cover_div = document.createElement('section')
			cover_div.id = 'teemboom_comments_popup'
			cover_div.className = 'teemboom_root'
			let popup_close = document.createElement('div')
			popup_close.id = 'teemboom_popup_close'
			popup_close.innerHTML = '<p>X</p>'
			popup_close.addEventListener('click', ()=>{popup_toogle()})
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
		let rules = `
		.teemboom_root{
			--teemboom-main: ${this.config.style.main};
			--teemboom-comments: ${this.config.style.comments};
			--teemboom-outline: ${this.config.style.outline};
			--teemboom-text: ${this.config.style.text};
			--teemboom-shadow: ${this.config.style.shadow};
			--teemboom-metrics_background: ${this.config.style.metrics_background};
			--teemboom-metrics_text: ${this.config.style.metrics_text};
			--teemboom-send_comment_background: ${this.config.style.send_comment_background};
			--teemboom-send_comment_text: ${this.config.style.send_comment_text};
			--teemboom-send_comment_outline: ${this.config.style.send_comment_outline};
			--teemboom-send_comment_shadow: ${this.config.style.send_comment_shadow};
			--teemboom-comments_background: ${this.config.style.comments_background};
			--teemboom-comment_title: ${this.config.style.comment_title};
			--teemboom-comment_title_text: ${this.config.style.comment_title_text};
			--teemboom-replies_background: ${this.config.style.replies_background};
			--teemboom-send_reply_background: ${this.config.style.send_reply_background};
			--teemboom-send_reply_text: ${this.config.style.send_reply_text};
			--teemboom-reply: ${this.config.style.reply};
			--teemboom-reply_text: ${this.config.style.reply_text};
			--teemboom-profile_outline: ${this.config.style.profile_outline};
			--teemboom-like_color: ${this.config.style.like_color};
			--teemboom-dislike_color: ${this.config.style.dislike_color};
			--teemboom-font_size: ${this.config.style.font_size}px;
			--teemboom-font_family: ${this.config.style.font_family}, Helvetica , Arial, sans-serif;
		}
		`
		let styleElement = document.createElement('style')
		styleElement.appendChild(document.createTextNode(rules))
		document.head.appendChild(styleElement)
		if (this.config.live_chat) {
			this.live_chat()
		}
	}

	get_comments(){
		fetch(`${this.teemboom_url}/teemboom_comments`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({'id': this.page_url})
		})
		.then(res=>{return res.json()})
		.then(json=>{
			for (let data of json.comments){
				this.add_comment(data, json.comments_no)
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
		fetch(`${this.teemboom_url}/submit_comment`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				'content': comment, 
				'user': user, 
				'id': this.page_url
			})
		})
		.then((res)=>{return res.json()})
		.then((json)=>{
			if (this.config.live_chat){
				this.socket.emit('spread_comment', {'room': this.page_url, 'comment': json})
			}else{
				if (this.config.auth_comments) {
					let markup = [
						['header', 'Thank you! <br><br> Your comment has been submitted and will be reviewed.'],
					]
					this.new_popup(markup)
				}
				else this.add_comment(json)
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
				'id': this.page_url,
				'comment_id': comment_id
			})
		})
		.then(res=>{return res.json()})
		.then(json=>{
			if (this.config.live_chat){
				this.socket.emit('spread_reply', {'room': this.page_url, 'comment': json})
			}else{
				json.comment_id = comment_id
				this.add_reply(json)
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
			if (this.config.live_chat){
				this.socket.emit('spread_like', {'room': this.page_url, 'data': json})
			}else{
				this.add_like(json)
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
			if (this.config.live_chat){
				this.socket.emit('spread_dislike', {'room': this.page_url, 'data': json})
			}else{
				this.add_dislike(json)
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
			this.user.username = 'Guest'
			return this.user
		}
		if (this.config.identification == '2'){
			if (!this.user){ // If the user is not signed in
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
			if (!this.user || !this.user){ // If the user is not signed in
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
			let markup = [
				['header', 'Login', false],
				['button', '<img src="http://teemboom.com/static/images/google_logo.png"> <p>Google</p>', {
					'className': 'teemboom_popup_social', 
					'style': {'background': '#4285F4', 'color': '#fff'}, 
					'onclick': ()=>{this.identification4_sign_in('google')}}],
				['button', '<img src="http://teemboom.com/static/favicon.ico"> <p>Teemboom</p>', 
				{'className': 'teemboom_popup_social', 'style': {'background': '#4900e7', 'color': '#fff'}}]
			]
			this.new_popup(markup)
			return false
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
				localStorage.setItem('session_id', json.session_id)// test
				// document.cookie = `session_id=${json.session_id}; path=/; SameSite=None; Secure`;
				this.user = user
				this.profile_avatar(this.user.username, document.getElementById(this.main_profile_id))
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
	getCookie(name) {
		
		return localStorage.getItem(name) //test
		let value = "; " + document.cookie;
		let parts = value.split("; " + name + "=");
		if (parts.length === 2) return parts.pop().split(";").shift();
		return null;
	}
	
	identification(){
		/*
		get the page session from the browser storage, either localstorage or a cross-domain cookie, if not set user to not signed in
		get the config level----------under each session stored in the db, have an object for each config level
		send this to the server for authentication
		based on the server response set the current user
		EXAMPLE
		server_object = {
			level2: {username},
			level3: {username, email, website...}
			level4: {username, email, profile_pic, user_id}
		}

		---Basic
		#NEW
		Signin
		Get identification details
		eg. Username, email, config_level.
		send to the server
		server responds with session_id
		store the id to the device
		set this.user to {username, email}
		#SERVER
		receives Username, email, config_level=2.
		creates session
		stores username, email in config_level2
		returns session_id
		#OLD
		Enters a site
		Get session
		send to server with config level
		server returns stored user details


		---Advanced
		eg. google_id, teemboom_id, facebook_id, config_level
		send to the server
		server responds with session_id
		store the id to the device
		#SERVER
		receives google_id, config_level=4
		creates session
		searches user database for user with google_id.
		if not found create new user
		store username, email, profile_pic in config_level4
		return session_id,

		#Old User.
		Enters a site
		Get session
		Get config level
		Send to server
		Server responds with apporiate object
		*/
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
			if (!this.user) this.user = false
			if (this.user.username){
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
			function openGoogleSignInPopup() {
				const clientId = '360201050801-r60i04v2j4f83ilmus698vtgcq16a5ng.apps.googleusercontent.com';
				const redirectUri = 'http://127.0.0.1:5000/google_auth_callback';
				const state = crypto.randomUUID();
				
				const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
					`client_id=${clientId}&` +
					`redirect_uri=${redirectUri}&` +
					`response_type=code&` +
					`scope=${'openid email profile'}&`+
					`state=${state}`;
	
				const popup = window.open(authUrl, 'google-signin', 'width=500,height=600');
				
				const interval = setInterval(() => {
					if (popup.closed) {
						clearInterval(interval);
						// Optionally, you can make an AJAX call to check the authentication status
						console.log('Popup closed. Handle authentication result here.');
					}
				}, 1000);
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
		this.profile_avatar(this.user.username, document.getElementById('teemboom_profile_popup_pfp'))
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
		this.socket.on('joined', (data)=>{
			console.log(data)
		})
		this.socket.on('display_comment', (data)=>{
			this.add_comment(data)
		})
		this.socket.on('display_reply', (data)=>{
			this.add_reply(data)
		})
		this.socket.on('display_like', (data)=>{
			this.add_like(data)
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
