var socketio = require("socket.io");

var createChat = function(server) {
	return socketio.listen(server);
}


var createSocket = function(serverio) {
  serverio.sockets.on('connection', function(socket) {
		socket.emit('news', { hello: "world" });

		socket.on("message", function(data) {
			serverio.sockets.emit('message', data)
			// socket.emit('message', data)
		})
	})
}
module.exports.createChat = createChat;
module.exports.createSocket = createSocket;
// module.exports.socketio = socketio;