/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'runtastic',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass', 'app/styles']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

	  ENV.contentSecurityPolicy = {
		  'default-src': "'none'",
		  'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://*.gstatic.com https://*.googleapis.com/",
		  'font-src': "'self' http://fonts.googleapis.com https://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
		  'connect-src': "'self' http://intense-bastion-3210.herokuapp.com", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
		  'img-src': "'self' https://*.googleapis.com https://maps.gstatic.com",
		  'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com https://fonts.gstatic.com https://fonts.googleapis.com/", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
		  'media-src': "'self'"
	  }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
