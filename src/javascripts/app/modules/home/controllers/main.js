/* istanbul ignore next */
define(function(require) {
    'use strict';
     var
        angular = require("angular"),
        _ = require('lodash'),
        controller;

    controller = ['$scope', 'rankingsResource', '$routeParams',
    function($scope, rankingsResource, $routeParams) {
      $scope.direction = $routeParams.direction || 'asc';
      if ($routeParams.direction === 'desc') {
        $scope.title = 'Falling';
        $scope.title_sub = 'The top falling Celebrities';
      } else {
        $scope.title = 'Trending';
        $scope.title_sub = 'The top trending Celebrities';
      }
      $scope.items = {};
      $scope.urlroute = 'http://img.s1k.com';
      if ($routeParams.site === 'famebuzz') {
        $scope.urlroute = 'http://img1.fame500.com';
      }
      rankingsResource.getRankings($routeParams).then(function(result) {
        if (result.items) {
          $scope.items = result.items;
        };
      });


    }
  ];

    return controller;
});