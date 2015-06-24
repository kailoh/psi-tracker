var React = require('react'),
	Table = require('./table.jsx'),
	DateControl = require('./datecontrol.jsx'),
	modelMixin = require('./modelMixin.jsx'),
	moment = require('moment'),
	Backbone = require('backbone')

module.exports = React.createClass({
	mixins: [modelMixin],
	getBackboneCollections: function() {
		return [this.props.collection];
	},
	getInitialState: function() {
		return {
			startDate: moment().subtract(48, 'hours'),
			endDate: moment()
		};
	},
	setStartDate: function(startDate) {
		console.log("setStartDate " + startDate);
		this.setState({
			startDate: startDate
		});
	},
	setEndDate: function(endDate) {
		console.log("setEndDate " + endDate);
		this.setState({
			endDate: endDate
		});
	},
	render: function() {
		return(
			<div>
				<DateControl onStartDateChanged={this.setStartDate} onEndDateChanged={this.setEndDate} startDate={this.state.startDate} endDate={this.state.endDate} />
				<Table collection={this.props.collection} startDate={this.state.startDate} endDate={this.state.endDate} />
			</div>
		)
	}
});

