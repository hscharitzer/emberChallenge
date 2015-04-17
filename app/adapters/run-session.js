import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
	pathForType: function(type) {
		var decamelized = Ember.String.decamelize(type);
		return Ember.String.pluralize(decamelized);
	}
});
