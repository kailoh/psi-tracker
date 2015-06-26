var modelMixin = require('../modelmixin.jsx'),
	React = require('react');
	Reading = require('./reading.jsx'),
	moment = require('moment-timezone')

module.exports = React.createClass({
	getInitialState: function() {
		return {
			ascending: true
		}
	},
	handleChange: function() {
		var newAscending = !this.state.ascending
		this.setState({
			ascending: newAscending
		})
	},
	render: function() {
		var sorted = [];
		if (!this.state.ascending) {
			for (var i=0; i<this.props.collection.length; i++) {
				sorted.push(this.props.collection[this.props.collection.length-i-1]);
			} 
		} else {
			for (var i=0; i<this.props.collection.length; i++) {
				sorted.push(this.props.collection[i]);
			} 
		}
		var rows = sorted.map(function(reading) {
			return (
            	<Reading key={reading.attributes._id} date={reading.attributes.date} national={reading.attributes.national} north={reading.attributes.north} south={reading.attributes.south} east={reading.attributes.east} west={reading.attributes.west} central={reading.attributes.central} />
			);
		});

		return (
			<table className="table table-striped">
			<thead>
			<tr>
			<th>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-sm" onClick={this.handleChange}>Sort</button></th>
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
