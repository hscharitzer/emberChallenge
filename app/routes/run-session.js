import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		params.sort_by = params.sortBy;

		if(params.page || params.page === 0){
			var page = params.page;

			page = isNaN(page) ? 1 : Math.floor(Math.abs(page));

			if(page === 0) {
				page = 1;
			}

			params.page = page;
		}

		if(params.sort_by) {
			if($.inArray(params.sort_by, ['id', 'start_time', 'end_time', 'duration', 'distance']) === -1) {
				params.sort_by = 'id';
			}
		}

		if(params.order) {
			if($.inArray(params.order, ['desc', 'asc']) === -1) {
				params.order = 'desc';
			}
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
