/* istanbul ignore next */
define(function(require) {
    'use strict';
    var angular = require('angular'),
        template = require('text!./login.html'),
        module;

    module = angular.module('app.login', ['ngRoute']);

    module.run(['$templateCache', function ($templateCache) {
      $templateCache.put('login', template);
    }]);

    angular.module('app.login').config(
      ['$routeProvider', '$locationProvider', '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {
          $routeProvider
            .when('/login', {
              template: template,
              controller: function($scope) {
                console.log('login');
              }
            });
        }
      ]
    );
    // Not used currently
    return module;
});