'use strict';

// Declare app level module which depends on views, and components
angular.module('dragonfly', [
  'ngRoute',
  'dragonfly.home',
  'dragonfly.about',
  'dragonfly.work',
  'dragonfly.art',
  'dragonfly.bodypaint',
  'dragonfly.contact',
  'dragonfly.services',
  'dragonfly.directives'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

var myServices = angular.module('dragonfly.services', []);
var myDirectives = angular.module('dragonfly.directives', []);