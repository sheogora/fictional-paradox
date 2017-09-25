'use strict';

// Declare app level module which depends on views, and components
angular.module('dragonfly', [
  'ngRoute',
  'dragonfly.home',
  'dragonfly.work',
  'dragonfly.art',
  'dragonfly.bodypaint',
  'dragonfly.contact',
  'dragonfly.services',
  'dragonfly.directives'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

angular.module('dragonfly')
    .directive('bsActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {
          scope.isActive = function (viewLocation) { 
              return viewLocation === $location.path();
          };
        }
    }
}]);

var myServices = angular.module('dragonfly.services', []);
var myDirectives = angular.module('dragonfly.directives', []);