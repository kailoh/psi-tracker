var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	dbConfig = require('./db'),
	PSIReading = require('./models/PSIReading'),
	seeder = require('./seeder')
	crawler = require('./crawler');

var app = express();

mongoose.connect(dbConfig.url);
mongoose.connection.on('open', function() {
	console.log('Connected to Mongo...');
	seeder.check();
});

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

app.get('/allpsi', function(req, res) {
	console.log("/allpsi called");
	PSIReading.find(function(err, readings) {
		if (err) {
			console.log('Error in retrieving readings: ' + err);
			throw err;
		}
		console.log("Readings retrieved successfully");
		//console.dir(readings);
		res.send(readings);
	})
});

app.get('/latest', function(req, res) {
	console.log('/latest called');
	PSIReading.find({}).sort({date: -1}).limit(1).exec(function(err, reading) {
		if (err) {
			console.log('Error in retrieving latest reading: ' + err);
			throw err;
		}
		console.log("Latest reading retrieved successfully");
		console.dir(reading);
		res.send(reading);
	})
})

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});