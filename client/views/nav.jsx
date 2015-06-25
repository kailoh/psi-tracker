var React = require('react'),
    RouterMixin = require('./routermixin.jsx')

module.exports = React.createClass({
    mixins: [RouterMixin],
    componentWillMount : function() {
        this.callback = (function() {
          this.forceUpdate();
      }).bind(this);
        this.props.router.on("route", this.callback);
    },
    componentWillUnmount : function() {
        this.props.router.off("route", this.callback);
    },
    render : function() {  
        nowClassName = "";
        historyClassName = "";
        if (this.props.router.current == "now") {
            nowClassName = "active";
        } else {
            historyClassName = "active";
        }
        return (
            <ul className="nav navbar-nav">
                <li className={nowClassName}><a href="#">Now</a></li>
                <li className={historyClassName}><a href="#history">History</a></li>
            </ul>
        )
    }
});