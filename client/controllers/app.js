var Backbone = require('backbone'),
React = require('react'),
PSITable = require('../views/filterabletable.jsx'),
Collection = require('../models/PSIcollection'),
jQuery = require('jquery');

var options = {
	dataType: "script",
	cache: true,
	url: "https://www.google.com/jsapi",
};

jQuery.ajax(options).done(function(){
	google.load("visualization", "1", {
		packages:["corechart"],
		callback: function() {
			var collection = new Collection();
			var startRendering = collection.fetch({
				success: function() {
					React.render(
						<PSITable collection={collection} />,
						document.getElementById('table')
						);
				}
			});
		}
	});
});

