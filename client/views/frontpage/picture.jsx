var React = require('react');

module.exports = React.createClass({
	render: function() {
		var imageFileNames = [
		'8300858350_c0dbe3b1e9_k', 
		'8521869678_778e518d45_k', 
		'5473345714_dfc67f1db4_o', 
		'16697215116_92c5e26e09_h']

		var chosenImage = imageFileNames[Math.floor(Math.random()*imageFileNames.length)];
		var fullPath = '/media/' + chosenImage + '.jpg';
		return (
			<div className="coverPicture" style={{ background: 'url(' + fullPath + ') no-repeat top center' }} />
		)
	}
})