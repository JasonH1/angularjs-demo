/* istanbul ignore next */
define(function(require) {
    'use strict';
    var angular = require('angular'),
        angularBootstrap = require('angularBootstrap'),
        angularRoute = require('angularRoute'),
        libimgfallback = require('libs/angular.dcb-img-fallback'),
        storage = require('angularLocalStorage'),
        security = require('./common/security/authentication'),
        features = require('./common/security/features'),
        resources = require('./common/resources/index'),
        modules = require('./modules/main'),
        templatenav = require('text!./modules/navbar/navbar.html'),
        templateside = require('text!./modules/sidebar/sidebar.html'),
        templatelogin = require('text!./modules/login/login.html'),
        logincontroller = require('./modules/login/controllers/login'),
        app;

    app = angular.module('app', [
        'ui.bootstrap',
        'libs.img-fallback',
        'angularLocalStorage',
        'common.security.authentication', // authentication service
        'common.security.features', // feature flagging
        'common.resources',
        'app.navbar',
        'app.footer',
        'app.sidebar',
        'app.home',
        'app.profile'
    ]);
    // Add the templates to templatecache
    // Otherwise anything with ng-include will not be happy and create a recursive loop
    app.run(['$templateCache',
        function($templateCache) {
            $templateCache.put('navbar', templatenav);
            $templateCache.put('sidebar', templateside);
            $templateCache.put('login', templatelogin);
        }
    ]);

    app.config(
        ['$routeProvider', '$locationProvider', '$httpProvider',
            function($routeProvider, $locationProvider, $httpProvider) {
                // Default route configuration
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/login', {
                        template: '',
                        controller: 'LoginController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ]
    ).controller('MainController', ['$scope', 'rankingsResource',
        function($scope, rankingsResource) {
            $scope.flags = {};
            $scope.lastUpdate = '';

            rankingsResource.getLastUpdate().then(function(results) {
                if (results.lastupdate) {
                    $scope.lastUpdate = new Date(results.lastupdate.updated * 1000).toUTCString();
                }
            });
            $scope.flags.nav = false;
            $scope.flags.side = false;
        }
    ]);
    app.controller('LoginController', logincontroller);
    return app;
});