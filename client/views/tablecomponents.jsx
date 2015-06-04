/***
* Table Components for React
***/


var ModelMixin = {
	componentDidMount: function() {
    // Whenever there may be a change in the Backbone data, trigger a reconcile.
    this.getBackboneModels().forEach(function(model) {
    	model.on('add change remove', this.forceUpdate.bind(this, null), this);
    }, this);
},

componentWillUnmount: function() {
    // Ensure that we clean up any dangling references when the component is
    // destroyed.
    this.getBackboneModels().forEach(function(model) {
    	model.off(null, null, this);
    }, this);
}
};

var PSITable = React.createClass({
	mixins: [RouterMixin, ModelMixin],
	getBackboneModels: function() {
		return [this.props.collection];
	},
	render: function() {
		var className = "animate-leave animate-leave-active";
		if (this.props.router.current == "table") {
			className = "animate-enter animate-enter-active";
		}

		var PSINodes = this.props.collection.map(function (reading) {
			return (
				<Reading className={className} key={reading.get('_id')} id={reading.get('_id')} date={reading.get('date')} 
				north={reading.get('north')} south={reading.get('south')} east={reading.get('east')} west={reading.get('west')} central={reading.get('central')}>
				</Reading>
				);
		});
		return (
			<div className={className}>
			<DatePicker />
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
			{PSINodes}
			</tbody>
			</table>
			</div>
			);
	}
})

var DatePicker = React.createClass({
	render: function() {
		return(
			<div id="sandbox-container">
			<div className="input-daterange input-group" id="datepicker">
			<input type="text" className="input-sm form-control" name="start" />
			<span className="input-group-addon">to</span>
			<input type="text" className="input-sm form-control" name="end" />
			</div>
			</div>
		)
	}
})


var Reading = React.createClass({
	render: function() {
		var date = moment(this.props.date);
		var formattedDate = date.tz('Asia/Singapore').format('ha, MMMM Do YYYY');
		return(
			<tr className="reading">
			<td>{formattedDate}</td>
			<td>{this.props.north}</td>
			<td>{this.props.south}</td>
			<td>{this.props.east}</td>
			<td>{this.props.west}</td>
			<td>{this.props.central}</td>

			</tr>);
	}
});

