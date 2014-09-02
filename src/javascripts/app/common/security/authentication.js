/* jslint plusplus: true */
define(function(require) {
  var
    angular = require('angular'),
    storage = require('angularLocalStorage'),
    angularResource = require('angularResource'),
    moment = require('moment'),
    module;

    module = angular.module('common.security.authentication',
        [
        ]);

    module.factory('authentication',
    ['$rootScope', '$http', '$location', 'storage', '$interval', '$window', '$timeout',
      function ($scope, $http, $location, storage, $interval, $window, $timeout) {
        var service = {};

        service.data = {
            email: '',
            token: ''
        };

        service.isAuthenticated = false;

        service.hasToken = function() {
            if (service.data.userToken) {
                return true;
            } else {
                return false;
            }
        };

        service.checkSession = function() {

        };

        service.login = function(email, password) {

        };

        service.serverCommunicationError = function() {

        };

        service.invalidateSession = function() {

        };
        return service;
      }
    ]
  );
});