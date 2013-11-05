(function() {
	ChatUI = window.ChatUI = ( window.ChatUI || {} );

	ChatUI.getMessage = function(data) {
		//returns text
		var queryString = $(event.target).serialize();
		return queryString.slice(8, queryString.length);
	};

	ChatUI.sendMessage = function(messageText, socket) {
		socket.emit("message", messageText);
	};

	ChatUI.displayMessage = function(data) {
		$("#message-display").append(document.createTextNode(data));
	};

})();



$(document).ready(function() {

	var socket = io.connect('http://localhost');

	socket.on('message', function(message) {
		console.log(message);
		ChatUI.displayMessage(message);
	});

	$('form').on('submit', function(event) {
		event.preventDefault();
		var messageText = ChatUI.getMessage(event);
		ChatUI.sendMessage(messageText, socket);
	});
});