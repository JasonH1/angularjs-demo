define(function(require) {
    'use strict';
     var
        angular = require("angular"),
        _ = require('lodash'),
        moment = require('moment'),
        controller;

    controller = ['$scope', '$http', '$window', '$routeParams', '$q',
        function ($scope, $http, $window, $routeParams, $q) {
            console.log('login controller');
            $.backstretch("assets/img/login-bg.jpg", {speed: 500});

            $scope.test = function(account) {

            };
        }
    ];

    return controller;
});