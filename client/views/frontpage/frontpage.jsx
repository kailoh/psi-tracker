var React = require('react'),
	moment = require('moment'),
	CurrentReading = require('./currentreading.jsx'),
	RecentChart = require('../history/googchart.jsx'),
	Map = require('./map.jsx'),
	Picture = require('./picture.jsx')

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
				<div className="coverPictureOverlay">
				<CurrentReading reading={this.state.collection[0]} currentDate={this.state.endDate} />

				</div>
				<Picture />

				<div className="frontSection">
				<h3>24-hour PSI</h3>
				<RecentChart graphName="recentChart" collection={this.state.collection.slice(0,24).reverse()} startDate={this.state.startDate} endDate={this.state.endDate} />
				</div>
				<hr />
				<div className="frontSection">
				<h3>Regional PSI</h3>
				<br />
				<br />
				<Map reading={this.state.collection[0]} />
				</div>
			</div>
		);
	}
})