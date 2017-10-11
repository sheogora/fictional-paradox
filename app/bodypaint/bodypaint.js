'use strict';
angular.module('dragonfly.bodypaint', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bodypaint', {
    templateUrl: 'bodypaint/bodypaint.html',
    controller: 'BodypaintCtrl'
  });
}])
.controller('BodypaintCtrl', ['$scope', '$window', '$sce', '$http', function($scope, $window, $sce,  $http) {
   $http.get('bodypaint/bodypaint.json')
       .then(function(res) {
          $scope.photos = res.data;
          for (var i = 0; i < $scope.photos.length; i++) {
            $scope.photos[i].fullres = $sce.trustAsResourceUrl($scope.photos[i].fullres);
          }
        });
}]).directive('lightgallery', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (scope.$last) {
          element.parent().lightGallery();
      }
    }
  };
})
