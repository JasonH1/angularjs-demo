/* istanbul ignore next */
define(function(require) {
    'use strict';
     var
        angular = require("angular"),
        _ = require('lodash'),
        controller;

    controller = ['$scope', 'RankingData',
    function($scope, RankingData) {

      $scope.items = {};
      if (RankingData.items) {
        $scope.items = RankingData.items;
      };

    }
  ];

    return controller;
});