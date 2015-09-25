var http = require('http');
var server = 4242;
http.createServer(function(request, response){
	render(request, response);
}).listen(server);
console.log(server + " is now being listened to.");

// Render.js

var fs = require('fs');

function render(request, response) {
	var file = fs.readFileSync('./sites/index.html', {
		'encoding':'utf8'
	});
	var cssFile = fs.readFileSync('./css/main.css', {
		'encoding':'utf8'
	});
	response.writeHead(200, {
		'content-type': 'text/html'
	});
	response.write(file);

	response.end();
}

