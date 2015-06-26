var Backbone = require('backbone'),
React = require('react'),
FullApp = require('../views/fullapp.jsx'),
Collection = require('../models/PSIcollection'),
$ = require('jquery'),
Router = require('./router'),
Nav = require('../views/nav.jsx');

var options = {
	dataType: "script",
	cache: true,
	url: "https://www.google.com/jsapi",
};

var collection = new Collection();

function getCollection() {
	var collection = new Collection();
	collection.fetch({
		success: function() {
			var router = new Router();
			React.render(
				<FullApp router={router} collection={collection} />,
				document.getElementById('mainContent')
				);
			React.render(
				<Nav router={router} />,
				document.getElementById('navigation')
				);
			Backbone.history.start();
		}
	});
}

$.ajax(options).done(function(){
	google.load("visualization", "1", {
		packages:["corechart"],
		callback: getCollection
	});
});