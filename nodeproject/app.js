var http = require('http');
var render = require('./render.js');
var server = 6789;
var x = 0;

http.createServer(function(request, response){
	render.render(request, response);
}).listen(server);
console.log(server + " is now being listened to.");
