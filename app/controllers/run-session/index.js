import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		show: function(id) {
			this.transitionToRoute('show', id);
		}
	}
});
