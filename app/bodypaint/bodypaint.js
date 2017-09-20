'use strict';
angular.module('dragonfly.bodypaint', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bodypaint', {
    templateUrl: 'bodypaint/bodypaint.html',
    controller: 'BodypaintCtrl'
  });
}])
.controller('BodypaintCtrl', ['$scope', '$window', function($scope, $window) {
}]);