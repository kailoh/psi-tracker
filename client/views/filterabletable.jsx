var React = require('react'),
	Table = require('./table.jsx'),
	DateControl = require('./datecontrol.jsx'),
	TimeChart = require('./googchart.jsx'),
	DownloadButton = require('./downloadbutton.jsx'),
	modelMixin = require('./modelMixin.jsx'),
	moment = require('moment'),
	Backbone = require('backbone')

module.exports = React.createClass({
	mixins: [modelMixin],
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
	getBackboneCollections: function() {
		return [this.props.collection];
	},
	getInitialState: function() {
		return {
			startDate: moment().tz('Asia/Singapore').subtract(48, 'hours'),
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
			<div>
				<DateControl onStartDateChanged={this.setStartDate} onEndDateChanged={this.setEndDate} startDate={this.state.startDate} endDate={this.state.endDate} />
				<TimeChart graphName="googGraph" collection={this.state.collection} startDate={this.state.startDate} endDate={this.state.endDate} />
				<Table collection={this.state.collection} startDate={this.state.startDate} endDate={this.state.endDate} />
				<DownloadButton collection={this.state.collection} startDate={this.state.startDate} endDate={this.state.endDate} />
			</div>
		)
	}
});

