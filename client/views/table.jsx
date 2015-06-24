var modelMixin = require('./modelmixin.jsx'),
	React = require('react');
	Reading = require('./reading.jsx'),
	moment = require('moment-timezone')

module.exports = React.createClass({
	render: function() {

		// var rows = this.props.collection.map(function(reading) {

		// 	return (
  //           <Reading key={reading.get('_id')} date={reading.get('date')} north={reading.get('north')} south={reading.get('south')} east={reading.get('east')} west={reading.get('west')} central={reading.get('central')} />
		// 	)
		// });
		var rows = []

		this.props.collection.forEach(function(reading) {

			var readingDate = moment(reading.get('date'));
			var startDate = moment(this.props.startDate);
			var endDate = moment(this.props.endDate);

			// var formattedDate = readingDate.tz('Asia/Singapore').format('ha, MMMM Do YYYY');
			// var formattedStartDate = startDate.tz('Asia/Singapore').format('ha, MMMM Do YYYY');
			// var formattedEndDate = endDate.tz('Asia/Singapore').format('ha, MMMM Do YYYY');
			// console.log("Reading: " + formattedDate, " | Start: " + formattedStartDate + " | End: " + formattedEndDate);

			if (readingDate > startDate && readingDate < endDate) {
				rows.push(
            		<Reading key={reading.get('_id')} date={reading.get('date')} north={reading.get('north')} south={reading.get('south')} east={reading.get('east')} west={reading.get('west')} central={reading.get('central')} />
				);
				//console.log("Within");
			} else {
				//console.log("Out of range");
			}
		}.bind(this));

		return (
			<table className="table table-striped">
			<thead>
			<tr>
			<th>Date</th>
			<th>North</th>
			<th>South</th>
			<th>East</th>
			<th>West</th>
			<th>Central</th>
			</tr>
			</thead>
			<tbody>
			{rows}
			</tbody>
			</table>
			);
	}
})
