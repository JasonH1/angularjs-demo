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
      $scope.items = [];
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

      $scope.loading = false;
      $scope.options = $routeParams;
      $scope.options.page = 1;
      $scope.page = function() {
        if (!$scope.loading) {
          $scope.loading = true;
          rankingsResource.getRankings($scope.options).then(function(result) {
            if (result.items) {
              if (result.items.length > 0) {
                  $scope.items = $scope.items.concat(result.items);
                  $scope.options.page++;
                  $scope.loading = false;
              } else {
                console.log('finished');
              }
            }
          });
        }
      };
    }
  ];

    return controller;
});