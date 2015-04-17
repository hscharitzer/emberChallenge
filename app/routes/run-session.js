import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
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
