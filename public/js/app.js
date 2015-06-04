var PSIModel = Backbone.Model.extend({
  url: '/psi'
});

var PSICollection = Backbone.Collection.extend({
  model: PSIModel,
  url: '/allpsi',
  initialize: function() {
  	console.log("initializing PSI collection");
    this.fetch();
  }
});
var Router = Backbone.Router.extend({
  routes : {
    "" : "home",
    "home" : "home",
    "table" : "table",
    "chart": "chart"
  },
  home : function() {
    this.current = "home";
  },
  table : function() {
    this.current = "table";
  },
  chart : function() {
    this.current = "chart";
  }
});
