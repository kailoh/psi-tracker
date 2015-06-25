var React = require('react'),
	moment = require('moment'),
	CurrentReading = require('./currentreading.jsx'),
	RecentChart = require('../history/googchart.jsx'),
	Map = require('./map.jsx')
	_ = require('underscore')

module.exports = React.createClass({
	getInitialState: function() {
		var sorted = this.props.collection.sortBy(function(m) { 
			return -moment(m.get('date'));
		});
		return {
			startDate: moment(this.props.currentDate).subtract(24, 'hours'),
			endDate: this.props.currentDate,
			collection: sorted
		};
	},
	render: function() {
		return (
			<div>
				<h3>Current PSI</h3>
				<CurrentReading reading={this.state.collection[0]} currentDate={this.state.endDate} />
				<hr />
				<h3>PSI over the last 24 Hours</h3>
				<RecentChart graphName="recentChart" collection={this.state.collection.slice(0,24).reverse()} startDate={this.state.startDate} endDate={this.state.endDate} />
				<hr />
				<h3>Map</h3>
				<Map reading={this.state.collection[0]} />
			</div>
		);
	}
})