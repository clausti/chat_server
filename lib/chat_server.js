var socketio = require("socket.io");

var createChat = function(server) {
	return socketio.listen(server);
}


var createSocket = function(serverio) {
  serverio.sockets.on('connection', function(socket) {
		socket.on("message", function(data) {
			socket.emit('broadcast', data)
		})
	})
}
module.exports.createChat = createChat;
module.exports.createSocket = createSocket;
// module.exports.socketio = socketio;