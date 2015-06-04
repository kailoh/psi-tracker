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


var HomeComponent = React.createClass({displayName: "HomeComponent",
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
      React.createElement("li", {className: className}, React.createElement("a", {onClick: this.handle}, "Home"))
    );
  }
});
 
var TableComponent = React.createClass({displayName: "TableComponent", 
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
      React.createElement("li", {className: className}, React.createElement("a", {onClick: this.handle}, "Table"))
    );
  }
});

var ChartComponent = React.createClass({displayName: "ChartComponent", 
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
      React.createElement("li", {className: className}, React.createElement("a", {onClick: this.handle}, "Chart"))
    );
  }
});

 
var InterfaceComponent = React.createClass({displayName: "InterfaceComponent",
  mixins : [RouterMixin],
  render : function() {
    var router = this.props.router;
    return (
    	React.createElement("ul", {className: "nav navbar-nav", id: "navigation"}, 
        	React.createElement(HomeComponent, {router: router}), 
        	React.createElement(TableComponent, {router: router}), 
        	React.createElement(ChartComponent, {router: router})
        )
    );
  }
});
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

var PSITable = React.createClass({displayName: "PSITable",
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
				React.createElement(Reading, {className: className, key: reading.get('_id'), id: reading.get('_id'), date: reading.get('date'), 
				north: reading.get('north'), south: reading.get('south'), east: reading.get('east'), west: reading.get('west'), central: reading.get('central')}
				)
				);
		});
		return (
			React.createElement("div", {className: className}, 
			React.createElement(DatePicker, null), 
			React.createElement("table", {className: "table table-striped"}, 
			React.createElement("thead", null, 
			React.createElement("tr", null, 
			React.createElement("th", null, "Date"), 
			React.createElement("th", null, "North"), 
			React.createElement("th", null, "South"), 
			React.createElement("th", null, "East"), 
			React.createElement("th", null, "West"), 
			React.createElement("th", null, "Central")
			)
			), 
			React.createElement("tbody", null, 
			PSINodes
			)
			)
			)
			);
	}
})

var DatePicker = React.createClass({displayName: "DatePicker",
	render: function() {
		return(
			React.createElement("div", {id: "sandbox-container"}, 
			React.createElement("div", {className: "input-daterange input-group", id: "datepicker"}, 
			React.createElement("input", {type: "text", className: "input-sm form-control", name: "start"}), 
			React.createElement("span", {className: "input-group-addon"}, "to"), 
			React.createElement("input", {type: "text", className: "input-sm form-control", name: "end"})
			)
			)
		)
	}
})


var Reading = React.createClass({displayName: "Reading",
	render: function() {
		var date = moment(this.props.date);
		var formattedDate = date.tz('Asia/Singapore').format('ha, MMMM Do YYYY');
		return(
			React.createElement("tr", {className: "reading"}, 
			React.createElement("td", null, formattedDate), 
			React.createElement("td", null, this.props.north), 
			React.createElement("td", null, this.props.south), 
			React.createElement("td", null, this.props.east), 
			React.createElement("td", null, this.props.west), 
			React.createElement("td", null, this.props.central)

			));
	}
});


/**
* Called zRender because this has to be the last file in sequential order otherwise references won't work
**/

var collection = new PSICollection();

var router = new Router();


React.render(
  React.createElement(InterfaceComponent, {router: router}),
  document.getElementById('navigation')
);


React.render(
  React.createElement(PSITable, {router: router, collection: collection}),
  document.getElementById('table')
  );

$('#sandbox-container .input-daterange').datepicker({
  });

Backbone.history.start();


