'use strict';
angular.module('dragonfly.art', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/art', {
    templateUrl: 'art/art.html',
    controller: 'ArtCtrl'
  });
}])
.controller('ArtCtrl', ['$scope', '$window', function($scope, $window) {
}]);