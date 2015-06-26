var React = require('react')

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
			<div>
			<button className="btn btn-primary btn-lg" onClick={this.handleClick}>Download data as CSV</button>
			<br /><br />
			This will download the data from {formattedStartDate} to {formattedEndDate} in a format that can be opened by Excel
			</div>
		)
	}

});