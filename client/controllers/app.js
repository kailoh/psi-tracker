var Backbone = require('backbone'),
	React = require('react'),
	PSITable = require('../views/filterabletable.jsx'),
	Collection = require('../models/PSIcollection')

var collection = new Collection();
collection.fetch({
	success: function() {
		React.render(
  			<PSITable collection={collection} />,
  			document.getElementById('table')
  		);
	}
});