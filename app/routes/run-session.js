import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		params.sort_by = params.sortBy;

		console.log("page 1");

		if(params.page || params.page == 0){
			var page = params.page;

			page = isNaN(page) ? 1 : Math.floor(Math.abs(page));

			if(page === 0) {
				page = 1;
			}

			params.page = page;
		}

		return this.store.find('run_session', params);
	},
	setupController: function(controller, model) {
		this._super.apply(this, arguments);
		controller.set('total', model.get('meta.pagination.available_pages'));
	},
	actions: {
		invalidateModel: function() {
			Ember.Logger.log('Route is now refreshing...');
			this.refresh();
		}
	}
});
