var modelMixin = require('./modelmixin.jsx'),
	React = require('react');
	Reading = require('./reading.jsx'),
	moment = require('moment-timezone')

module.exports = React.createClass({
	render: function() {
		var rows = this.props.collection.map(function(reading) {
			return (
            	<Reading key={reading.get('_id')} date={reading.get('date')} national={reading.get('national')} north={reading.get('north')} south={reading.get('south')} east={reading.get('east')} west={reading.get('west')} central={reading.get('central')} />
			);
		});

		return (
			<table className="table table-striped">
			<thead>
			<tr>
			<th>Date</th>
			<th>National</th>
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
