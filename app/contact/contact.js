'use strict';
angular.module('dragonfly.contact', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])
.controller('ContactCtrl', ['$scope', '$window', function($scope, $window) {
}]);