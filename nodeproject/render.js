var fs = require('fs');
var fill = require('./fill')

function render(request, response) {
	if(request.url === "/" || request.url === "/index.html") {
		console.log(request.url);
		var file = fs.readFileSync('./sites/index.html', {
			'encoding':'utf8'
		});
		console.log("Site is rendering index.html");
		response.writeHead(200, {
			'content-type': 'text/html'
		});
		response.write(file);
		response.end();
	}

	else if (request.url === '/lorem.html')  {
		var file = fs.readFileSync('./sites/lorem.html', {
			'encoding':'utf8'
		});

		console.log("Site is rendering lorem.html");
		response.writeHead(200, {
			'content-type': 'text/html'
		});

		request.on('data', function(chunky) {
			console.log("chunky's data is " + chunky + " and type is " + typeof chunky);
			file = fill.filler(chunky.toString(), request, response, file);
			response.write(file);
			response.end();
		});
	}
}

module.exports.render = render;