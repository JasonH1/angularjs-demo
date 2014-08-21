/* istanbul ignore next */
define(function(require) {
    'use strict';
    var angular = require('angular'),
        template = require('text!./home.html'),
        libimgfallback = require('./../../libs/angular.dcb-img-fallback'),
        maincontroller = require('./controllers/main'),
        module;

    module = angular.module('app.home', ['ngRoute', 'libs.img-fallback']);

    module.run(['$templateCache', function ($templateCache) {
      $templateCache.put('home', template);
    }]);

    angular.module('app.home').config(
      ['$routeProvider', '$locationProvider', '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {
          $routeProvider
            .when('/', {
              template: template,
              controller: 'HomeController',
            })
            .when('/trending/:site?/:sector?/:direction?', {
              template: template,
              controller: 'HomeController',
            })
        }
      ]
    ).controller('HomeController', maincontroller);

    return module;
});