console.log("Running Crawler");

var request = require('request');
var parseString = require('xml2js').parseString;
var PSIReading = require('./models/PSIReading');

function crawl() {
	var apiKey = process.env.NEA_API_KEY || '781CF461BB6606AD24D4ABA1502FD8EEB89262F6D662DFE0';
	var endpoint = 'http://www.nea.gov.sg/api/WebAPI?dataset=psi_update&keyref=' + apiKey;

	//make a request to the NEA PSI update endpoint
	request(endpoint, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			parseString(body, function(err, result) {

				//extract relevant data
				var tidiedData = { 'time': result.channel.item[0].region[0].record[0].$.timestamp }
				for (var i=0; i<result.channel.item[0].region.length; i++) {
					region = result.channel.item[0].region[i].id;
					psiValue = result.channel.item[0].region[i].record[0].reading[0].$.value;
					tidiedData[region] = psiValue;
				}

				var readingDate = new Date(tidiedData.time.substring(0,4) + '/' + tidiedData.time.substring(4,6) + '/' + tidiedData.time.substring(6,8) + ' ' + tidiedData.time.substring(8,10) + ':00:00 GMT+0800');

				// dummy listing 1
				var newReading = new PSIReading({
					date: readingDate,
					north: tidiedData.rNO, south: tidiedData.rSO, east: tidiedData.rEA, west: tidiedData.rWE, central: tidiedData.rCE, national: tidiedData.NRS 
				});

				console.dir(newReading);
				console.log("Finished printing reading");
				PSIReading.find({
					"date": {"$gte": readingDate} 
				}, function(err, readings){
					console.log("Found " + readings + " readings");
					if (readings.length == 0) {
						newReading.save(function(err, newReading3){
							console.log('Successfully inserted reading: ' + newReading._id);
						});
					}
				});
			});
		}

	});
}

crawl();