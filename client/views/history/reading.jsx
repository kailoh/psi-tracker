var React = require('react'),
	moment = require('moment-timezone');

module.exports = React.createClass({
	render: function() {
		var date = moment(this.props.date);
		var formattedDate = date.tz('Asia/Singapore').format('ha, MMMM Do YYYY');
		return(
			<tr className="reading">
			<td>{formattedDate}</td>
			<td>{this.props.national}</td>
			<td>{this.props.north}</td>
			<td>{this.props.south}</td>
			<td>{this.props.east}</td>
			<td>{this.props.west}</td>
			<td>{this.props.central}</td>
			</tr>);
	}
});
