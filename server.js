var express = require('express');
var app = express();

app.enable('trust proxy');

app.get('/', function(req, res){
	var result = {};
	
	result.ipaddress = req.ip;
	result.language = req.headers['accept-language'].split(',')[0];
	result.software = req.headers['user-agent'].split(')')[0].split('(')[1];
	res.send(JSON.stringify(result));
});

app.listen(8080, function(){
	console.log('Example app listening on port 8080!');
})