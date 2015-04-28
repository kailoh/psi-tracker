var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	dbConfig = require('./db')

var app = express();

var logger = function(req, res, next) {
    console.log("Received request " + req.method + " " + req.url);
    next(); 
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger);
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});