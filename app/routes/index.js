import Ember from "ember";

var IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('run_session');
	},
	model: function() {
		console.log("blubb?");
		return ['red', 'yellow', 'blue'];
	},
	foo: function() {
		return "bar";
	}
});

export default IndexRoute;