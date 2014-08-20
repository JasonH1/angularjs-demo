/* istanbul ignore next */
define(function(require) {
    'use strict';
    var angular = require('angular'),
        template = require('text!./profile.html'),
        maincontroller = require('./controllers/main'),
        libimgfallback = require('./../../libs/angular.dcb-img-fallback'),
        rgraph = require('./../../libs/RGraph'),
        module;

    module = angular.module('app.profile', ['ngRoute', 'libs.img-fallback']);

    module.run(['$templateCache', function ($templateCache) {
        $templateCache.put('profile', template);
    }]);

    angular.module('app.profile').config(
      ['$routeProvider', '$locationProvider', '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {
          $locationProvider.html5Mode(true);
          $routeProvider
            .when('/profile', {
              template: template,
              controller: 'ProfileController'
            })
            .when('/profile/:id?', {
              template: template,
              controller: 'ProfileController'
            })
            .otherwise({redirectTo: '/'});
        }
      ]
    ).controller('ProfileController', maincontroller);

    return module;
});