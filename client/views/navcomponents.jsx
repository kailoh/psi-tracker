/***
* Nav Bar Components for React
***/

var RouterMixin = {
  componentWillMount : function() {
    this.callback = (function() {
      this.forceUpdate();
    }).bind(this);
    this.props.router.on("route", this.callback);
  },
  componentWillUnmount : function() {
    this.props.router.off("route", this.callback);
  }
};


var HomeComponent = React.createClass({
  mixins : [RouterMixin],
  handle : function() {
    this.props.router.navigate("home", {
      trigger : true
    });
  },
  render : function() {  
  	var className = "myName";
    if (this.props.router.current == "home") {
      	className = "active";
    }

    return (
      <li className={className}><a onClick={this.handle}>Home</a></li>
    );
  }
});
 
var TableComponent = React.createClass({ 
  mixins : [RouterMixin],
  handle : function() {
    this.props.router.navigate("table", {
      trigger : true
    });
  },
  render : function() {
  	var className = "myName";
    if (this.props.router.current == "table") {
      	className = "active";
    }
  
    return (
      <li className={className}><a onClick={this.handle}>Table</a></li>
    );
  }
});

var ChartComponent = React.createClass({ 
  mixins : [RouterMixin],
  handle : function() {
    this.props.router.navigate("chart", {
      trigger : true
    });
  },
  render : function() {
  	var className = "myName";
    if (this.props.router.current == "chart") {
      	className = "active";
    }
    return (
      <li className={className}><a onClick={this.handle}>Chart</a></li>
    );
  }
});

 
var InterfaceComponent = React.createClass({
  mixins : [RouterMixin],
  render : function() {
    var router = this.props.router;
    return (
    	<ul className="nav navbar-nav" id="navigation">
        	<HomeComponent router={router} />
        	<TableComponent router={router} />
        	<ChartComponent router={router} />
        </ul>
    );
  }
});