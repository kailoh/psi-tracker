var React = require('react'),
	json2csv = require('json2csv')

module.exports = React.createClass({
	render: function() {
		var formattedStartDate = this.props.startDate.format('ha, MMMM Do YYYY'),
			formattedEndDate = this.props.endDate.format('ha, MMMM Do YYYY')

		// var fields = ['Date', 'National', 'North', 'South', 'East', 'West', 'Central'];
		// json2csv({ data: this.props.collection, fields: fields }, function(err, csv) {
  // 			if (err) console.log(err);
		// });

		return (
			<button>Download data from {formattedStartDate} to {formattedEndDate}</button>
		)
	}

});