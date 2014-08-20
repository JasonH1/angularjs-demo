/* istanbul ignore next */
define(function(require) {
    'use strict';
     var
        angular = require("angular"),
        _ = require('lodash'),
        controller;

    controller = ['$scope', '$routeParams', 'profileResource',
    function($scope, $routeParams, profileResource) {
      $scope.id = $routeParams.id || '';
      $scope.profile = {};
      $scope.chart = {};
      profileResource.getProfile($scope.id).then(function(results) {
        $scope.profile = results.profile;
      });
      profileResource.getChart($scope.id).then(function(results) {
        $scope.chart = results.chart;
        var data = _.map($scope.chart, function(item) {
          return item[1];
        });
        var count = 0;
        var labels = _.map($scope.chart, function(item) {
          return --count;
        });
        labels = labels.reverse();
          var tooltips = [];
            // Create the tooltips
            for (var i=0; i<data.length; i+=1) {
                tooltips[i] = 'Buzz Score: ' + String(data[i])
            }
          var line = new RGraph.Line({
              id: 'cvs',
              data: data,
              options: {
                tooltips: {
                        self: tooltips,
                        highlight: false
                    },
                    colors: ['#058DC7'],
                    filled: true,
                    fillstyle: 'rgba(229,243,249,0.5)',
                    tickmarks: 'filledcircle',
                    background: {
                        grid: {
                            vlines: false,
                            border: false,
                            autofit: {
                                numhlines: 2
                            }
                        }
                    },
                    shadow: false,
                    linewidth: 4,
                    gutter: {
                        left: 50,
                        right: 20
                    },
                    numxticks: 3,
                    ylabels: {
                        count: 2
                    },
                    axis: {
                        color: '#aaa'
                    },
                    text: {
                        angle: 90,
                        color: '#aaa'
                    },
                    labels: labels
              }
          });
          RGraph.ISOLD ? line.draw() : line.trace2();
      });
    }
  ];

    return controller;
});