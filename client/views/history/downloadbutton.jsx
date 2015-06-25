var React = require('react'),
	json2csv = require('json2csv')

module.exports = React.createClass({
	handleClick: function() {
		var csvContent = "data:text/csv;charset=utf-8,";
		csvContent += "Date,National,North,South,East,West,Central\n";
		this.props.collection.forEach(function(reading) {
			var row = reading.get('date') + "," 
					+ reading.get('national') + "," 
					+ reading.get('north') + "," 
					+ reading.get('south') + "," 
					+ reading.get('east') + ","
					+ reading.get('west') + ","
					+ reading.get('central') + "\n"
			csvContent += row;
		});
		var encodedUri = encodeURI(csvContent);
		window.open(encodedUri);
	},
	render: function() {
		var formattedStartDate = this.props.startDate.format('ha, MMMM Do YYYY'),
			formattedEndDate = this.props.endDate.format('ha, MMMM Do YYYY')
		return (
			<button onClick={this.handleClick}>Download data from {formattedStartDate} to {formattedEndDate}</button>
		)
	}

});