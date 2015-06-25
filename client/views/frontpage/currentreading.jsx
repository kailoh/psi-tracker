var React = require('react'),
	moment = require('moment')

module.exports = React.createClass({
	render: function() {
		var formattedDate = this.props.currentDate.format('ha, MMMM Do YYYY');
			console.log("Test")

		return (
			<div>
				<h1>{this.props.reading.get('national')}</h1>
				<h3>As of {formattedDate}</h3>
			</div>
		)
	}
})