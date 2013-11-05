var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var router = require('./router.js')

var httpServer = http.createServer(function(req, res) {
	router.route(req, res);
}).listen(8080);

console.log('server running at http://127.0.0.1:8080/');

var chatServer = require('./lib/chat_server.js')

var io = chatServer.createChat(httpServer);
chatServer.createSocket(io)




