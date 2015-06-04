var mongoose = require('mongoose'),
PSIReading = require('./models/PSImodel');

module.exports = {
	
	// Check if the db is empty, if its not add dummy listings
	check : function() {
		// Listings
		PSIReading.find({}, function(err, readings){
			if (readings.length === 0) {
				
				console.log('No readings found; Seeding...');

				// dummy listing 1
				var newReading = new PSIReading({
					date: new Date('Apr 29 2015 01:00:00 GMT+0800'), 
					north: 53, south: 53, east: 57, west: 54, central: 55 
				});
				newReading.save(function(err, addedReading){
					console.log('Successfully inserted reading: ' + addedReading._id);
				});

				// dummy listing 2
				var newReading2 = new PSIReading({
					date: new Date('Apr 29 2015 02:00:00 GMT+0800'), 
					north: 53, south: 52, east: 57, west: 54, central: 55 
				});
				newReading2.save(function(err, newReading2){
					console.log('Successfully inserted reading: ' + newReading2._id);
				});

				// dummy listing 3
				var newReading3 = new PSIReading({
					date: new Date('Apr 29 2015 03:00:00 GMT+0800'), 
					north: 52, south: 52, east: 57, west: 54, central: 54 
				});
				newReading3.save(function(err, newReading3){
					console.log('Successfully inserted reading: ' + newReading3._id);
				});
				
			} else {
				console.log('Found ' + readings.length + ' existing readings');
			}
		});
		
	}
}
