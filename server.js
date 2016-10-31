var express = require('express');
var app = express();
var port = process.env.PORT || 8080

app.enable('trust proxy');

app.get('/', function(req, res){
	var result = {};
	
	result.ipaddress = req.ip;
	result.language = req.headers['accept-language'].split(',')[0];
	result.software = req.headers['user-agent'].split(')')[0].split('(')[1];
	res.send(JSON.stringify(result));
});

app.listen(port, function(){
	console.log('Running');
})