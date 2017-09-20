'use strict';
angular.module('dragonfly.work', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'work/work.html',
    controller: 'WorkCtrl'
  });
}])
.controller('WorkCtrl', ['$scope', '$window', function($scope, $window) {
}]);