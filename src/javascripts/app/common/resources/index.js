/* jslint plusplus: true */
define(function(require) {
  var
    angular = require('angular'),
    user = require('./user'),
    rankings = require('./rankings'),
    profile = require('./profile'),
    module;

    // we can require individually or we can group them list this and require the group if needed.
    module = angular.module('common.resources',['common.resources.user', 'common.resources.rankings', 'common.resources.profile']);
});