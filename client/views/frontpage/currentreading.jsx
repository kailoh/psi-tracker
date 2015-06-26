var React = require('react'),
	moment = require('moment')

module.exports = React.createClass({
	render: function() {
		var formattedDate = this.props.currentDate.format('ha, MMMM Do YYYY');
			console.log("Test")
		var backgroundColor = '#000000';
		var severity = "";
		if(this.props.reading.get('national')<51) {
			backgroundColor = '#163B16';
			severity = 'Healthy';
		} else if (this.props.reading.get('national')<101) {
			backgroundColor = '#6B3C03';
			severity = 'Moderate';
		} else {
			backgroundColor = '#6B0803';
			severity = 'Unhealthy';
		}
			
		var backgroundProperty = {
			background: backgroundColor
		}

		return (
			<div className="circle" style={backgroundProperty}>
				{this.props.reading.get('national')}
				<h3>({severity})</h3>
				<h5>as of {formattedDate} (Singapore time)</h5>
			</div>
		)
	}
})