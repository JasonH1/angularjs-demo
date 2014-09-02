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
      $scope.params = {};
      $scope.newbuzz = false;
      $scope.params.site = $routeParams.site || 'kpopbuzz';
      $scope.params.sector = $routeParams.sector || 'all';

      if ($routeParams.direction === 'desc') {
        $scope.title = 'Falling';
        $scope.title_sub = 'The top falling Celebrities';
      } else {
        $scope.title = 'Trending';
        $scope.title_sub = 'The top trending Celebrities';
      }
      $scope.items = {};
      $scope.urlroute = 'http://img.s1k.com';
      switch($routeParams.site) {
        case 'famebuzz':
          $scope.urlroute = 'http://img1.fame500.com';
          break;
        case 'buzzcharts':
        case 'buzzcharts2':
          $scope.urlroute = 'http://img1.fame500.com';
          $scope.newbuzz = true;
      }


      rankingsResource.getRankings($routeParams).then(function(result) {
        if (result.items) {
          $scope.items = result.items;
        }
      });


    }
  ];

    return controller;
});