(function() {
	ChatUI = window.ChatUI = ( window.ChatUI || {} );

	ChatUI.getMessage = function(data) {
		//returns text
		var queryString = $(event.target).serialize();
		queryString = queryString.slice(8, queryString.length);
		queryString = queryString.replace(/\++/, ' ');
		return queryString;
	};

	ChatUI.sendMessage = function(messageText, socket) {
		socket.emit("message", messageText);
	};

	ChatUI.displayMessage = function(data) {
		var text = document.createTextNode(data);
		$("#message-display").append(text)
		$("#message-display").append($("<br>"));
	};

})();



$(document).ready(function() {

	var socket = io.connect();

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