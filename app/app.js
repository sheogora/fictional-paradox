'use strict';

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
  .controller('mainCtrl', ['$scope', function($scope) {
    // Mobile menu expand function
    $scope.onMenuClick = function() {
      var menuList = angular.element('#menu-items')[0];
      menuList.classList.toggle('expand');
    };
    // reset menu
    $scope.$on('$locationChangeStart', function( event ) {
      var menuList = angular.element('#menu-items')[0];
      menuList.classList.remove('expand');
    });
  }])
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