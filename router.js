var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');


function servePage(pageFile, res) {
	console.log(pageFile);
	fs.readFile(pageFile, { encoding: 'utf8' }, function(err, data) {
		if (err) {
			console.log('you have an error!')
		}

		res.write(data);
		res.end();
	});
}



function route(req, res) {
	var url = req.url;

	if (url === '/') {
		servePage('index.html', res);
	} else if (url = '/favicon.ico') {
		console.log('no icon yet');
	} else {
		servePage(url, res);
	}
}



module.exports.route = route;