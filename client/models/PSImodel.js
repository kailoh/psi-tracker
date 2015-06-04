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