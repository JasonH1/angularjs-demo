require.config({
  //baseUrl: '.',

  // optimizer configuration
  optimize: 'uglify2',
  preserveLicenseComments : false,
  generateSourceMaps: true,

  uglify2: {
      output: {
        beautify: false
      },

      mangle: false
  },

  // runtime paths and shims
  paths: {
    // end of network components
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
    angular: '../bower_components/angular/angular',
    angularScroll: '../bower_components/angular-infinite-scroll/angular-infinite-scroll',
    angularTouch: '../bower_components/angular-touch/angular-touch',
    angularLocalStorage: '../bower_components/angularLocalStorage/src/angularLocalStorage',
    angularResource: '../bower_components/angular-resource/angular-resource',
    angularRoute: '../bower_components/angular-route/angular-route',
    angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
    angularCookies: '../bower_components/angular-cookies/angular-cookies',
    angularBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    lodash: '../bower_components/lodash/dist/lodash',
    text: '../bower_components/requirejs-text/text',
    moment: '../bower_components/momentjs/min/moment.min'
  },

  shim: {
    "angular": {
      deps: ["jquery"],
      exports: "angular"
    },
    "angularRoute": {
      deps: ["angular"]
    },
    "angularLocalStorage": {
      deps: ["angular", "angularCookies"]
    },
    "angularResource": {
      deps: ["angular"]
    },
    "angularCookies": {
      deps: ["angular"]
    },
    "angularBootstrap": {
      deps: ["angular"]
    },
    "angularTouch": {
      deps: ['angular']
    },
    "bootstrap": {
        deps: ['jquery']
    }
  }
});

// IE console issue when the developer tools are not opened.
//Ensures there will be no 'console is undefined' errors
if(!window.console){
    window.console = window.console || (function(){
        var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
        return c;
    })();
}

require([
  'jquery',
  'angular',
  'app/main',
], function ($, angular, app) {
  'use strict';
 var $html = angular.element(document.getElementsByTagName('html')[0]);
 angular.element().ready(function () {
    //$html.addClass('ng-app');
    angular.bootstrap($html, [app.name]);
  });
});
