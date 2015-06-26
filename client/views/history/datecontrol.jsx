var React = require('react'),
	ReactDatePicker = require('react-datepicker'),
	moment = require('moment'),
	$ = require('jquery')

module.exports = React.createClass({

	handleStartDateChange: function(date) {
		this.props.onStartDateChanged(date);
	},

	handleEndDateChange: function(date) {
		this.props.onEndDateChanged(date);
	},

	//to add bootstrap style to the date picker
	componentDidMount: function() {
		$('.datepicker__input').addClass('form-control input-lg')
	},

	render: function() {
		return(
			<div className="row">
				<div className="col-md-3 col-md-offset-3">
					<label>From</label>
					<ReactDatePicker
						ref="startDateInput"
        				selected={this.props.startDate}
        				onChange={this.handleStartDateChange}
      				/>
      			</div>
      			<div className="col-md-3">
      				<label>To</label>
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