var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');


var servePage = function(pageFile, res) {
	console.log('pagefile: ' + pageFile);

	fs.readFile(pageFile, { encoding: 'utf8' }, function(err, data) {
		if (err) {
			console.log("error");
			res.writeHead(404);
			res.write('404 not found')
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	});
}



function route(req, res) {
	var url = req.url;
	console.log(url);

	if (url === '/') {
		servePage('index.html', res);
	} else if (url == '/favicon.ico') {
		console.log('no icon yet');
	} else {
		console.log('here')
		servePage(url, res);
	}
}



module.exports.route = route;