var React = require('react')

module.exports = React.createClass({
	render: function() {
		var westColor = '#000000',
			eastColor = '#000000',
			northColor = '#000000',
			southColor = '#000000',
			centralColor = '#000000'

		if (this.props.reading.get('west') < 51) {
			westColor = '#163B16';
		} else if (this.props.reading.get('west') < 101) {
			westColor = '#6B3C03';
		} else if (this.props.reading.get('west') >= 101) {
			westColor = '#6B0803';
		}

		if (this.props.reading.get('east') < 51) {
			eastColor = '#163B16';
		} else if (this.props.reading.get('east') < 101) {
			eastColor = '#6B3C03';
		} else if (this.props.reading.get('east') >= 101) {
			eastColor = '#6B0803';
		}

		if (this.props.reading.get('north') < 51) {
			northColor = '#163B16';
		} else if (this.props.reading.get('north') < 101) {
			northColor = '#6B3C03';
		} else if (this.props.reading.get('north') >= 101) {
			northColor = '#6B0803';
		}

		if (this.props.reading.get('south') < 51) {
			southColor = '#163B16';
		} else if (this.props.reading.get('south') < 101) {
			southColor = '#6B3C03';
		} else if (this.props.reading.get('south') >= 101) {
			southColor = '#6B0803';
		}

		if (this.props.reading.get('central') < 51) {
			centralColor = '#163B16';
		} else if (this.props.reading.get('central') < 101) {
			centralColor = '#6B3C03';
		} else if (this.props.reading.get('central') >= 101) {
			centralColor = '#6B0803';
		}		

		return (
			<div className="map-wrapper">
				<img src="/media/outlinemap.png" width="600"/>
				<div className="map-west">
					<h2 style={{color: westColor}}>{this.props.reading.get('west')}</h2>
				</div>
				<div className="map-east">
					<h2 style={{color: eastColor}}>{this.props.reading.get('east')}</h2>
				</div>
				<div className="map-north">
					<h2 style={{color: northColor}}>{this.props.reading.get('north')}</h2>
				</div>
				<div className="map-south">
					<h2 style={{color: southColor}}>{this.props.reading.get('south')}</h2>
				</div>
				<div className="map-central">
					<h2 style={{color: centralColor}}>{this.props.reading.get('central')}</h2>
				</div>
			</div>
		)
	}
})