var React = require('react'),
	ReactDatePicker = require('react-datepicker'),
	moment = require('moment')

module.exports = React.createClass({

	handleStartDateChange: function(date) {
		this.props.onStartDateChanged(date);
	},

	handleEndDateChange: function(date) {
		this.props.onEndDateChanged(date);
	},

	render: function() {
		return(
			<div className="row">
				<div className="col-md-3">
					<ReactDatePicker
						ref="startDateInput"
        				selected={this.props.startDate}
        				onChange={this.handleStartDateChange}
      				/>
      			</div>
      			<div className="col-md-3">
      				<ReactDatePicker
      					ref="endDateInput"
      					selected={this.props.endDate}
      					onChange={this.handleEndDateChange}
      				/>
      			</div>
      		</div>
			)
	}

})