/* jslint plusplus: true */
define(function(require) {
  var
    angular = require('angular'),
    angularResource = require('angularResource'),
    module;

    module = angular.module('common.security.features',
        []);

    module.factory('features',
    ['$rootScope', '$window',  '$q',
      function ($scope, $window, $q) {
        var service = {};
        service.flags = {};
        if ($window.FEATURE_FLAGS) {
            service.flags = $window.FEATURE_FLAGS;
            for (var x in service.flags) {
              service.flags[x] = (service.flags[x].toLowerCase() === "true");
            }
        }
        service.getFlags = function() {
          return service.flags;
        };
        return service;
      }
    ]
  );

    return module;
});