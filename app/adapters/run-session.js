import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
	//pathForType: function(type) {
	//	console.log("run-session adapter")
	//	return Ember.String.underscore(type);
	//},

	pathForType: function(type) {
		console.log(type);
		var decamelized = Ember.String.decamelize(type);
		return Ember.String.pluralize(decamelized);
	}
});
