/* jslint plusplus: true */
define(function(require) {
  var
    angular = require('angular'),
    angularResource = require('angularResource'),
    module;

    module = angular.module('common.resources.user',['common.security.authentication']);

    module.factory('userResource',
    ['$rootScope', '$http', '$location', 'storage', '$interval', 'authentication', '$q',
      function ($scope, $http, $location, storage, $interval, authentication, $q) {
        var service = {};
        service.user = null;
        service.paymentInfo = {};
        //storage.bind(service.user, 'user', {"defaultValue": ''});

        // user resource
        service.setUser = function(user) {
            service.user = user;
        };

        service.getUser = function() {
            if (!service.user) {
                // No user
                //console.log('no user');
                //return service.user;
                return service.user;

                //$location.path('/login');
            } else {
                return service.user;
            }
        };

        service.checkUser = function() {

        };
        service.addPaymentInfo = function(paymentInfo) {
            service.user.paymentInfo = paymentInfo;
        };
        service.getPaymentInfo = function() {
            return service.user.paymentInfo;
        };
        return service;
      }
    ]
  );
});