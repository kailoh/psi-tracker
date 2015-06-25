var React = require('react'),
	moment = require('moment')

module.exports = React.createClass({
	render: function() {
		var formattedDate = this.props.currentDate.format('ha, MMMM Do YYYY');
		return (
			<h1>Current PSI: {this.props.reading.get('national')} as of {formattedDate}</h1>
		)
	}
})