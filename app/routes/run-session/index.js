import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		show: function(id) {
			this.transitionToRoute('show', id);
		}
	}
});
