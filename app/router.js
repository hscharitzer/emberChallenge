import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    this.resource('run_session', function() {
        //this.route('show', { path: '/:run_session_id' });
    });

    this.route('show', { path: '/run_session/:run_session_id' });
});

