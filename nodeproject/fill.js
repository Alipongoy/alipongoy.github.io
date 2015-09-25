var querystring = require('querystring');
var values;

function filler(data, request, response, site) {
	console.log('Filler activated ');
	console.log(site);
	values = querystring.parse(data);
	for (var key in values) {
		console.log(key + ": " + values[key]);
		site = site.replace('{{' + key + '}}', values[key]);
	}
	return site;
}

module.exports.filler = filler;