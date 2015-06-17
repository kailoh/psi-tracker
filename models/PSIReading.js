var mongoose = require('mongoose');

module.exports = mongoose.model('PSIReading',{
	date: Date,
	north: Number,
	south: Number,
	east: Number,
	west: Number,
	central: Number,
	national: Number
});