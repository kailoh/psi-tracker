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
