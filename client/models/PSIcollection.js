var model = require('./PSImodel'),
	Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
	model: model,
	url: '/allpsi',
});