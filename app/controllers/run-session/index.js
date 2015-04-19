import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		show: function(id) {
			console.log("run-session/index");
			this.transitionToRoute('show', id);
		}
	}
});
