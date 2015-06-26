var React = require('react')

module.exports = React.createClass({
	render: function() {
		return (
			<div className="map-wrapper">
				<img src="/media/outlinemap.png" width="600"/>
				<div className="map-west">
					<h2>{this.props.reading.get('west')}</h2>
				</div>
				<div className="map-east">
					<h2>{this.props.reading.get('east')}</h2>
				</div>
				<div className="map-north">
					<h2>{this.props.reading.get('north')}</h2>
				</div>
				<div className="map-south">
					<h2>{this.props.reading.get('south')}</h2>
				</div>
				<div className="map-central">
					<h2>{this.props.reading.get('central')}</h2>
				</div>
			</div>
		)
	}
})