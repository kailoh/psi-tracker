var React = require('react'),
	moment = require('moment')

module.exports = React.createClass({
	render: function() {
		var formattedDate = this.props.currentDate.format('ha, MMMM Do YYYY');
			console.log("Test")
		var backgroundColor = '#000000';
		if(this.props.reading.get('national')<51) {
			backgroundColor = '#163B16';
		} else if (this.props.reading.get('national')<101) {
			backgroundColor = '#6B3C03';
		} else {
			backgroundColor = '#6B0803';
		}
			
		var backgroundProperty = {
			background: backgroundColor
		}

		return (
			<div className="circle" style={backgroundProperty}>
				{this.props.reading.get('national')}
				<h4>Current PSI reading</h4>
				<h5>as of {formattedDate} (Singapore time)</h5>
			</div>
		)
	}
})