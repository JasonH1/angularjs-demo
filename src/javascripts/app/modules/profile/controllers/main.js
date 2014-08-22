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
      $scope.sector = $routeParams.sector || 'all';
      $scope.site = $routeParams.site || 'kpopbuzz';
      $scope.profile = {};
      $scope.chart = {};
      $scope.options = $routeParams;
      $scope.options.showCharts = false;
      $scope.url = '';
      $scope.results = [];
      $scope.total = 0;

      if ($scope.site === 'famebuzz' && $scope.sector === 'all') {
        $scope.options.showCharts = true;
      }
      if ($scope.site === 'famebuzz') {
        $scope.url = 'http://img1.fame500.com/';
      } else {
        $scope.url = 'http://img.s1k.com/';
      }
      profileResource.getProfile($scope.id).then(function(results) {
        $scope.profile = results.profile;
      });
      $scope.drawChart = function(chartid, options) {
         profileResource.getChart(options).then(function(results) {
          $scope.chart = results.chart;
          var data = _.map($scope.chart, function(item) {
            return item[1];
          });
          var count = 0;
          var labels = _.map($scope.chart, function(item) {
            return count--;
          });
              var score = 0;
              var tooltips = _.map($scope.chart, function(item) {
                score += item[1];
                return 'Buzz Score: ' + String(item[1]);
              });
              tooltips = tooltips.reverse();
              var line = new RGraph.Line({
                  id: chartid,
                  data: data.reverse(),
                  options: {
                       tooltips: {
                          self: tooltips,
                          highlight: false
                      },
                      title: 'Last 2 weeks (daily) - sector: ' + options.sector,
                      filled: true,
                      fillstyle: 'rgba(229,243,249,0.5)',

                      labels: labels,
                      yaxispos: 'left',
                      xaxispos: 'center',
                      hmargin: 5
                  }
              }).trace()
              if (options.sector !== 'all') {
                $scope.results.push({ name: options.sector , score: score });
                $scope.total += score;
              }

        });
      };

      $scope.drawChart('cvs', $routeParams);
      if ($scope.options.showCharts) {
        $scope.drawChart('cvs2', { id: $routeParams.id , sector: 'PerezHilton' });
        $scope.drawChart('cvs3', { id: $routeParams.id , sector: 'TMZ' });
        $scope.drawChart('cvs4', { id: $routeParams.id , sector: 'metro' });
        $scope.drawChart('cvs5', { id: $routeParams.id , sector: 'DailyMail' });
        $scope.drawChart('cvs6', { id: $routeParams.id , sector: 'Yahoo' });
      } else {

      }

    }
  ];

    return controller;
});