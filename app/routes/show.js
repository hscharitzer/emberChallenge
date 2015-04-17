import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		console.log("show route");
		console.log(params);


		return this.store.find('run_session', params.run_session_id);
	},
});
