'use strict';
angular.module('dragonfly.about', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl'
  });
}])
.controller('AboutCtrl', ['$scope', '$window', function($scope, $window) {
}]);