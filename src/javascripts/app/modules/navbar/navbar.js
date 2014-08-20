/* istanbul ignore next */
define(function(require) {
    'use strict';
    var angular = require('angular'),
        template = require('text!./navbar.html'),
        module;

    module = angular.module('app.navbar', []);

    // Add navbar into the cache so ng-include can resolve and not go into an infinite loop
    module.run(['$templateCache', function ($templateCache) {
      $templateCache.put('navbar', template);
    }]);

    return module;
});