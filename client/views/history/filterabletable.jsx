var React = require('react'),
	Table = require('./table.jsx'),
	DateControl = require('./datecontrol.jsx'),
	TimeChart = require('./googchart.jsx'),
	DownloadButton = require('./downloadbutton.jsx'),
	moment = require('moment'),
	Backbone = require('backbone')

module.exports = React.createClass({
	
	updateCollection: function(startDate, endDate) {
		var newCollection = [];
		this.props.collection.forEach(function(reading) {
			var readingDate = moment(reading.get('date'));
			if (readingDate > startDate && readingDate < endDate) {
				newCollection.push(reading);
			} 
		}.bind(this));
		this.setState({
			collection: newCollection
		})
	},
	componentWillMount: function() {
		this.updateCollection(this.state.startDate, this.state.endDate);
	},
	getInitialState: function() {
		return {
			startDate: moment().tz('Asia/Singapore').subtract(7, 'days'),
			endDate: moment().tz('Asia/Singapore'),
			collection: this.props.collection
		};
	},
	setStartDate: function(startDate) {
		this.updateCollection(startDate, this.state.endDate);
		this.setState({
			startDate: startDate
		});
	},
	setEndDate: function(endDate) {
		this.updateCollection(this.state.startDate, endDate);
		this.setState({
			endDate: endDate
		});
	},
	render: function() {
		return(
			<div className="history">
				<div className="container">
				<DateControl onStartDateChanged={this.setStartDate} onEndDateChanged={this.setEndDate} startDate={this.state.startDate} endDate={this.state.endDate} />
				</div>
				<br />
				<hr />
				<div className="container historySection">
				<DownloadButton collection={this.state.collection} startDate={this.state.startDate} endDate={this.state.endDate} />
				</div>
				<div className="container historySection">
				<TimeChart graphName="googGraph" collection={this.state.collection} startDate={this.state.startDate} endDate={this.state.endDate} />
				</div>
				<div className="container historyTable">
				<Table collection={this.state.collection} startDate={this.state.startDate} endDate={this.state.endDate} />
				</div>
			</div>
		)
	}
});

