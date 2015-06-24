module.exports = {
	componentDidMount: function() {
    // Whenever there may be a change in the Backbone data, trigger a reconcile.
    	this.getBackboneCollections().forEach(function(collection) {
            collection.on('add remove change', this.forceUpdate.bind(this, null), this)
    	}, this);
	},

	componentWillUnmount: function() {
    // Ensure that we clean up any dangling references when the component is
    // destroyed.
   		this.getBackboneCollections().forEach(function(collection) {
    		collection.off(null, null, this);
    	}, this);
	}	

};