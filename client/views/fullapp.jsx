var React = require('react'),
	FilterableTable = require('./history/filterabletable.jsx'),
	FrontPage = require('./frontpage/frontpage.jsx'),
	moment = require('moment'),
	RouterMixin = require('./routermixin.jsx'),
	ModelMixin = require('./modelmixin.jsx')

module.exports = React.createClass({
	mixins: [RouterMixin, ModelMixin],
	getBackboneCollections: function() {
		return [this.props.collection];
	},
	render: function() {
		//need code to get latest reading
		var currentDate = moment().tz('Asia/Singapore');
		if (this.props.router.current == 'now') {
			return <FrontPage currentDate={currentDate} collection={this.props.collection} />
		} else {
			return <FilterableTable currentDate={currentDate} collection={this.props.collection} />
		}
	}
});