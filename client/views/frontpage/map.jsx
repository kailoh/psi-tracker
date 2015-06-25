var React = require('react')

module.exports = React.createClass({
	render: function() {
		return (
			<div className="map-wrapper">
				<img src="/media/outlinemap.png" width="600"/>
				<div className="map-west">
					<h3>W{this.props.reading.get('west')}</h3>
				</div>
				<div className="map-east">
					<h3>E{this.props.reading.get('east')}</h3>
				</div>
				<div className="map-north">
					<h3>N{this.props.reading.get('north')}</h3>
				</div>
				<div className="map-south">
					<h3>S{this.props.reading.get('south')}</h3>
				</div>
				<div className="map-central">
					<h3>C{this.props.reading.get('central')}</h3>
				</div>
			</div>
		)
	}
})