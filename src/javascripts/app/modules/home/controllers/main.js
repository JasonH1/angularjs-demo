/* istanbul ignore next */
define(function(require) {
    'use strict';
     var
        angular = require("angular"),
        _ = require('lodash'),
        controller;

    controller = ['$scope', 'RankingData', '$routeParams',
    function($scope, RankingData, $routeParams) {
      console.log($routeParams);
      $scope.direction = $routeParams.direction || 'asc';
      if ($routeParams.direction) {
        $scope.title = 'Falling';
        $scope.title_sub = 'The top falling Celebrities';
      } else {
        $scope.title = 'Trending';
        $scope.title_sub = 'The top trending Celebrities';
      }
      $scope.items = {};
      if (RankingData.items) {
        $scope.items = RankingData.items;
      };

    }
  ];

    return controller;
});