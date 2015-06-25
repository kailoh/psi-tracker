var React = require('React')

module.exports = React.createClass({
    render: function() {
        return React.DOM.div({id: this.props.graphName, style: {height: "500px"}});
    },
    componentDidMount: function() {
        this.drawCharts(); 
    },
    componentDidUpdate: function() {
        this.drawCharts();
    },
    drawCharts: function() {

        var chartData = [];
        chartData.push(['Date', 'National', 'North', 'South', 'East', 'West', 'Central']);
        var formattedStartDate = this.props.startDate.tz('Asia/Singapore').format('ha, MMMM Do YYYY');
        var formattedEndDate = this.props.endDate.tz('Asia/Singapore').format('ha, MMMM Do YYYY');

        this.props.collection.forEach(function(reading) {
            var readingDate = moment(reading.get('date'));
            chartData.push([readingDate.tz('Asia/Singapore').format('ha, MMMM Do YYYY'),
              reading.get('national'),
              reading.get('north'),
              reading.get('south'),
              reading.get('east'),
              reading.get('west'),
              reading.get('central')]
            );
        }.bind(this));

        var data = google.visualization.arrayToDataTable(chartData);
        var options = {
          title: 'PSI Readings from ' + formattedStartDate + ' to ' + formattedEndDate,
          curveType: 'function'
      };

      var chart = new google.visualization.LineChart(
          document.getElementById(this.props.graphName)
          );
      chart.draw(data, options);
  }
});