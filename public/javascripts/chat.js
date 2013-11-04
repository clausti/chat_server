
(function() {
	var ClientSide = window.ClientSide = (window.ClientSide || {} );

	ClientSide.Chat = function(socket) {
		this.socket = socket;
	};

	ClientSide.Chat.prototype.sendMessage = function(messageText) {
		this.socket.emit("message", messageText);
	};


})();
