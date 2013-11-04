var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var router = require('./router.js')

http.createServer(function(req, res) {

	router.route(req, res);

	// res.writeHead(200, { 'Content-Type': 'text/plain'});
	// res.end('Hello World\n');
}).listen(8080);

console.log('server running at http://127.0.0.1:8080/');

