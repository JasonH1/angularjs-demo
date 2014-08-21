/* jslint plusplus: true */
define(function(require) {
  var
    angular = require('angular'),
    angularResource = require('angularResource'),
    module;

    module = angular.module('common.resources.rankings', []);

    module.factory('rankingsResource',
    ['$rootScope', '$http', '$location', 'storage', '$interval', '$q',
      function ($scope, $http, $location, storage, $interval, $q) {
        var service = {};
        service.getLastUpdate = function() {
          var deferred = $q.defer();
            $http.get('http://api.kpop.s1k.com/KPOP:STATS/latest', {}).
            success(function(response) {
                deferred.resolve({ error: null , lastupdate: response});
            }).
            error(function(err) {
                 deferred.resolve({ error: err , lastupdate: null});
            });

            return deferred.promise;
        }
        service.getRankings = function(direction) {
            var deferred = $q.defer();
            $http.get('http://api.kpop.s1k.com/kpopbuzz.all?'+ direction+ '=true', {}).
            success(function(response) {
                deferred.resolve({ error: null , items: response.items});
            }).
            error(function(err) {
                 deferred.resolve({ error: err , items: null});
            });

            return deferred.promise;
        };


        return service;
      }
    ]
  );
});