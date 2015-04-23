import Ember from "ember";

var IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('run_session');
	}
});

export default IndexRoute;