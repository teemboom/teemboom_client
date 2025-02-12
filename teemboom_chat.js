function teemboomChatInit(args = false) {
	let theme_url = 'https://chat-themes.teemboom.com'
	let chat_api = 'https://chat.teemboom.com'
	let config;
	let domainName = `${window.location.protocol}//${window.location.host}`
	let appID = null
	let userID = null
	let username = null
	let userProfilePicture = null
	let recipientUserID = null
	let recipientUsername = null
	let recipientProfilePicture = null

	if (!args) {
		if (document.getElementById('teemboom_chat')) {
			mainDiv = document.getElementById('teemboom_chat')
			appID = mainDiv.dataset.app_id
			userID = mainDiv.dataset.user_id
			username = mainDiv.dataset.username
			userProfilePicture = mainDiv.dataset.user_profile_pic
			recipientUserID = mainDiv.dataset.recipient_user_id
			recipientUsername = mainDiv.dataset.recipient_username
			recipientProfilePicture = mainDiv.dataset.recipient_profile_pic
		}

	} else {
		appID = args.app_id
		userID = args.user.id
		username = args.user.username
		userProfilePicture = args.user.profile_pic
		if (args.recipient) {
			recipientUserID = args.recipient.id
			recipientUsername = args.recipient.username
			recipientProfilePicture = args.recipient.profile_pic
		}
	}

	if (!appID) { console.error('Teemboom Chat: Missing app id'); return }
	if (!userID) { console.error('Teemboom Chat: Missing user id'); return }
	if (!username) { console.error('Teemboom Chat: Missing username'); return }

	let roomDetails = {
		'app_id': appID,
		'user': {
			'id': userID,
			'username': username,
			'profile_pic': userProfilePicture
		}
	}
	fetch(`${chat_api}/update_user`, {
		'headers': { 'Content-type': 'application/json' },
		'method': 'POST',
		'body': JSON.stringify({ 'app_id': appID, 'user': roomDetails.user })
	})
	if (recipientUserID) { // If a reciepient is defined, Make sure all details esixt
		if (!recipientUsername) { console.error('Teemboom Chat: Missing recipient username'); return }
		roomDetails['recipient'] = {
			'id': recipientUserID,
			'username': recipientUsername,
			'profile_pic': recipientProfilePicture
		}
	}


	// Get the app config. styles, allowed features, theme
	fetch(`${chat_api}/teemboom_config`, {
		'headers': { 'Content-type': 'application/json' },
		'method': 'POST',
		'body': JSON.stringify({ 'app_id': appID, 'domain_name': domainName })
	})
		.then(res => { return res.json() })
		.then(response => {
			if (!response.status) return
			config = response.data
			config.chat_api = chat_api
			let theme_css = document.createElement('link')
			theme_css.setAttribute('href', `${theme_url}/${config.theme}/teemboom_theme.css`)
			theme_css.setAttribute('rel', 'stylesheet')
			theme_css.setAttribute('id', 'temboom_css')
			document.head.appendChild(theme_css)

			let theme_js = document.createElement('script');
			theme_js.onload = () => {
				teemboom_app(config, roomDetails)
			}
			theme_js.setAttribute('src', `${theme_url}/${config.theme}/teemboom_app.js`)
			document.head.appendChild(theme_js);
		})
}


class teemboomChatClass {
	constructor(obj) {
		this.config = obj.config
		this.roomDetails = obj.roomDetails
		this.populate = obj.populate
		this.addMessage = obj.addMessage
		this.addUserConversation = obj.addUserConversation
		this.updateUserConversation = obj.updateUserConversation
		this.updateMessage = obj.updateMessage
		this.removeMessage = obj.removeMessage
		this.messageBoxId = obj.messageBoxId
		this.load()
	}

	page_url = `${location.host}${location.pathname}`;
	socket = false;
	pending_socket_requests = []
	currentRoom = null;
	currentRoomMessages = null;
	rooms = null;
	app_id = null;
	message_date = null
	main_div;
	user = false
	chat_api = 'https://chat.teemboom.com'
	auth_api = 'https://auth.teemboom.com'
	
	load() {
		this.main_div = document.getElementById('teemboom_chat')
		if (!this.main_div) return
		this.admin_config()
		this.populate()
		this.loadUserRooms()
	}

	admin_config() {
		let style_rule = '#teemboom_chat{'
		let lightMode = this.config.style.colors.light
		for (let style in lightMode) {
			style_rule += `--teemboom-${style}: ${lightMode[style]};`
		}

		let font = this.config.style.font.normal
		for (let style in font) {
			let px = ''
			if (style == 'font_size') px = 'px'
			style_rule += `--teemboom-${style}: ${font[style]}${px};`
		}
		style_rule += '}'

		let styleElement = document.createElement('style')
		styleElement.appendChild(document.createTextNode(style_rule))
		document.head.appendChild(styleElement)
	}

	loadUserRooms() {
		this.app_id = this.roomDetails.app_id
		this.user = this.roomDetails.user
		fetch(`${this.chat_api}/get_user_rooms`, {
			'headers': { 'Content-type': 'application/json' },
			'method': 'POST',
			'body': JSON.stringify({
				'app_id': this.app_id,
				'user_id': this.user.id
			})
		})
		.then(res => { return res.json() })
		.then(async (response) => {
			if (!response.status) { console.error('Teemboom chat: ' + response.message) }

			// Complie the recieved rooms data into a more useable format
			function complie_rooms(data) {
				return data.reduce((acc, room) => {
					const userObject = room.users.reduce((userAcc, user) => {
						userAcc[user._id] = user;
						return userAcc;
					}, {});
					acc[room._id] = {
						...room,
						users: userObject,
					};
					return acc;
				}, {});
			}
			this.rooms = complie_rooms(response.data)


			// If a reciepient chat user was defined, this means we want to specifically start
			// or continue a chat with someone.
			if (this.roomDetails.recipient) {
				// Check if a such a room already exists in the returned data, this will save latency
				let room_found = false
				for (let room_id in this.rooms) {
					// If such a room exists by checking if a room contains both users
					if (this.roomGetUser(room_id, this.user.id) && this.roomGetUser(room_id, this.roomDetails.recipient.id)) {
						const index = response.data.findIndex(item => item._id === room_id);
						if (index !== 0) { // if element is not the first, make it the first
							const [element] = response.data.splice(index, 1); // Remove the element from its current position
							response.data.unshift(element); // Add the element to the beginning of the array
						}
						room_found = true
						break;
					}
				}
				if (!room_found) {
					await fetch(`${this.chat_api}/create_room`, {
						'headers': { 'Content-type': 'application/json' },
						'method': 'POST',
						'body': JSON.stringify(this.roomDetails)
					})
						.then(res => { return res.json() })
						.then(json => {
							if (!json.status) {
								console.error('Teemboom Chat: ' + json.message);
								return
							}
							response.data.unshift(json.data)
							this.rooms = complie_rooms(response.data)
							let otherUser = this.roomGetOtherUser(json.data._id, this.user.id)
							this.pending_socket_requests.push({
								'new_room': { 'room': this.app_id+otherUser._id, 'room_data': json.data }
							})
						})
				}
			}
			this.currentRoom = response.data[0]._id
			for (let room of response.data) {
				this.addUserConversation(room)
			}
			this.loadRoomMessages()

			this.live_chat()
		})
	}

	loadRoomMessages(room_id = false) {
		this.message_date = null
		if (room_id){
			if (room_id === this.currentRoom) return
			this.currentRoom = room_id
		} 
		document.getElementById('teemboom_messages').innerHTML = ''
		fetch(`${this.chat_api}/get_room_messages`, {
			'headers': { 'Content-type': 'application/json' },
			'method': 'POST',
			'body': JSON.stringify({
				'app_id': this.app_id,
				'room_id': this.currentRoom
			})
		})
			.then(res => { return res.json() })
			.then(res => {
				if (!res.status) {
					console.error('Teemboom chat: ' + res.message)
					return
				}
				let messages = res.data
				this.currentRoomMessages = messages
				for (let message of messages) {
					this.addMessage(message)
					this.scrollToBottom(this.messageBoxId, true, 'instant')
				}
				this.updateUserConversation({'room_id': this.currentRoom}, true)
			})
	}


	sendMessage(inputElement) {
		let message = inputElement.value
		if (message === '' || /[A-Za-z0-9]/.test(message) == false) return;
		inputElement.value = ''
		let reply_to = inputElement.dataset.reply_to
		fetch(`${this.chat_api}/new_message`, {
			'headers': { 'Content-type': 'application/json' },
			'method': 'POST',
			'body': JSON.stringify({
				'app_id': this.app_id,
				'room_id': this.currentRoom,
				'user_id': this.user.id,
				'content': message,
				'reply_to': reply_to
			})
		})
			.then(res => { return res.json() })
			.then(res => {
				if (!res.status) {
					return
				}
				this.socket.emit('spread_message', { 'room': this.getSocketRoomId(res.data.room_id), 'message': res.data })
			})
	}
	editMessage(message_id, content){
		if (content === '' || /[A-Za-z0-9]/.test(content) == false) return;
		fetch(`${this.chat_api}/edit_message`, {
			'headers': { 'Content-type': 'application/json' },
			'method': 'POST',
			'body': JSON.stringify({
				'app_id': this.app_id,
				'message_id': message_id,
				'user_id': this.user.id,
				'content': content
			})
		})
		.then(res => {return res.json()})
		.then(res => {
			if (!res.status){
				return
			}
			this.socket.emit('edit_message', {
				'room': this.getSocketRoomId(this.currentRoom), 
				'data': res.data})
		})
	}
	deleteMessage(message_id){
		fetch(`${this.chat_api}/delete_message`, {
			'headers': { 'Content-type': 'application/json' },
			'method': 'POST',
			'body': JSON.stringify({
				'app_id': this.app_id,
				'message_id': message_id,
				'user_id': this.user.id,
			})
		})
		.then(res => {return res.json()})
		.then(res => {
			if (!res.status){
				return
			}
			this.socket.emit('delete_message', {
				'room': this.getSocketRoomId(this.currentRoom), 
				'data': res.data})
		})
	}
	newUnreadMessage(room_id){
		fetch(`${this.chat_api}/new_unread_message`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				'app_id': this.app_id,
				'room_id': room_id
			})
		})
	}
	clearUnreadMessaeges(room_id){
		fetch(`${this.chat_api}/clear_unread_messages`, {
			'headers': {'Content-type': 'application/json'},
			'method': 'POST',
			'body': JSON.stringify({
				'app_id': this.app_id,
				'room_id': room_id
			})
		})
	}


	getSocketUserId(){
		return this.app_id + this.user.id
	}
	getSocketRoomId(room_id){
		return this.app_id+room_id
	}

	live_chat() {
		// Load the socketio client script
		let socketio_script = document.createElement('script');
		socketio_script.onload = () => {
			this.socket = io('https://socket.teemboom.com');
			let rooms = []
			for (let key of Object.keys(this.rooms)){
				rooms.push(this.getSocketRoomId(key))
			}
			rooms.push(this.getSocketUserId())
			this.socket.emit('join_rooms', { 'rooms': rooms})
			this.socket_connections()
		}
		socketio_script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js')
		socketio_script.setAttribute('integrity', "sha512-q/dWJ3kcmjBLU4Qc47E4A9kTB4m3wuTY7vkFJDTZKjTs8jhyGQnaUrxa0Ytd0ssMZhbNua9hE+E7Qv1j+DyZwA==")
		socketio_script.setAttribute('crossorigin', "anonymous");
		document.head.appendChild(socketio_script);
	}

	socket_connections() {
		// Send pending requests
		this.pending_socket_requests.forEach(request => {
			const eventName = Object.keys(request)[0]; 
			const eventData = request[eventName];
			this.socket.emit(eventName, eventData);
		});

		// Functions to handle socket events
		this.socket.on('display_message', (data) => {
			if (data.room_id == this.currentRoom){
				this.currentRoomMessages.push(data)
				this.addMessage(data, this.user.id)
				this.updateUserConversation(data, false, false)
			}else{
				this.updateUserConversation(data)
			}
		})
		this.socket.on('edit_message', (data) => {
			this.updateMessage(data.message_id, data.content)
		})
		this.socket.on('delete_message', (data) => {
			this.removeMessage(data.message_id)
		})
		this.socket.on('create_new_room', (data) => {
			this.rooms[data._id] = data
			this.socket.emit('join_rooms', {'rooms': [this.getSocketRoomId(data._id)]})
			this.addUserConversation(data, true)
		})
	}

	findRoomMessage(message_id){
		return this.currentRoomMessages.find(msg => msg._id === message_id)
	}

	roomGetUser(room_id, userId = false) {
		// Find the user in a room whoose id is equal to the user id.
		let room = this.rooms[room_id]
		if (!userId) userId = this.user.id
		return Object.values(room.users).find(user => user._id === userId) || null;
	}
	
	roomGetOtherUser(room_id, userId = false) {
		// find the user in the room whoose id is not equal to the user_id.
		// helps if you know one user but don't know the other.
		let room = this.rooms[room_id]
		if (!userId) userId = this.user.id
		return Object.values(room.users).find(user => user._id !== userId) || null;
	}

	formatTo12Hour(date) {
		date = new Date(date)
		let hours = date.getUTCHours(); // Get hours in UTC
		const minutes = date.getUTCMinutes(); // Get minutes in UTC
		const amPm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
		hours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12
		return `${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;
	}
	formatToDate(isoTime) {
		return new Date(isoTime).toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}
	scrollToBottom(id, scrollDownEvenIfNotAtBottom=false, behavior='smooth') {
		let div = document.getElementById(id);
		let isAtBottom = div.scrollHeight - div.scrollTop - 300 <= div.clientHeight;
		if (isAtBottom || scrollDownEvenIfNotAtBottom) {
			div.scrollTo({
				top: div.scrollHeight,
				behavior: behavior
			});
		}else{
			return false		
		}
		return true
	}
}
