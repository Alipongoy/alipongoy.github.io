var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');



app.get('/', function(req, res) {
	res.send('Goodbye World');	
});

app.get('/portfolio?', function(req, res) {
	res.send('Fakke');
});

app.listen(3000);
