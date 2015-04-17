import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {

		//var page;
		//
		//if(params.page){
		//	page = params.page;
		//	page = isNaN(page) ? 1 : Math.floor(Math.abs(page));
		//	// page=1 will result into offset 0, page=2 will result into offset 10 and so on
		//	this.set('offset', (page-1) * this.get('limit'));
		//}

		console.log("run-session route");
		console.log(params);
		//return this.store.find('run_session', {
		//	page: this.get('page'),
		//	order: this.get('order'),
		//	sortBy: this.get('sortBy')
		//});

		params.sort_by = params.sortBy; // TODO: Das hier irgendwie... automatisch machen?

		return this.store.find('run_session', params);
	},
	actions: {
		invalidateModel: function() {
			Ember.Logger.log('Route is now refreshing...');
			this.refresh();
		}
	}
});
