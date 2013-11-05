var socketio = require("socket.io");

var createChat = function(server) {
	return socketio.listen(server);
}

var guestNumber = (guestNumber || 0);

var nickNames = (nickNames || {});

var namesUsed = function() {
	var keys = Object.keys(nickNames);
	var values = [];

	for (var i = 0; i < keys.length; i++) {
		values.push(nickNames.keys[i]);
	}

	return values;
}


var checkNameUsed = function(data) {
	if (namesUsed().indexOf(data.nickName) === -1) {
		return false;
	} else {
		return true;
	}
}

var createSocket = function(serverio) {
  serverio.sockets.on('connection', function(socket) {
		guestNumber++;

		var socketId = guestNumber.valueOf();
		nickNames[socketId] = "guest" + socketId;

		socket.emit('news', { hello: "world" });

		socket.on("message", function(data) {
			serverio.sockets.emit('message', (nickNames[socketId] + ": " + data));
		});

		socket.on("nickNameChangeRequest", function(data) {
			if (checkNameUsed(data)) {
				socket.emit('nickNameChangeResult', {
					success: false,
					message: "You can't use this nickname"
				});
			} else {
				socket.emit('nickNameChangeResult', {
					success: true,
					message: "You have changed your nickname"
				});
			}
		});
	})
}


module.exports.guestNumber = guestNumber;
module.exports.createChat = createChat;
module.exports.createSocket = createSocket;
// module.exports.socketio = socketio;