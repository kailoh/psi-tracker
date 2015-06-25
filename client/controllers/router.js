var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'now',
		'history': 'history' 
	},
	now: function() {
		this.current = 'now';
	},
	history: function() {
		this.current = 'history';
	} 
})