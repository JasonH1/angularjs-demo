/* istanbul ignore next */
define(function(require) {
    'use strict';
    var angular = require('angular'),
        template = require('text!./sidebar.html'),
        module;

    module = angular.module('app.sidebar', []);

    // Add navbar into the cache so ng-include can resolve and not go into an infinite loop
    module.run(['$templateCache', function ($templateCache) {
      $templateCache.put('sidebar', template);
    }]);

    return module;
});