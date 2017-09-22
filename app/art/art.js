'use strict';
angular.module('dragonfly.art', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/art', {
    templateUrl: 'art/art.html',
    controller: 'ArtCtrl'
  });
}])
.controller('ArtCtrl', ['$scope', '$window', '$sce', function($scope, $window, $sce) {
  $scope.photos = [{
    fullres: 'https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg',
    thumbnail: 'https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg',
    title: 'Test1',
    subhtml: '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>',
    responsive: 'https://sachinchoolur.github.io/lightGallery/static/img/1-375.jpg 375, https://sachinchoolur.github.io/lightGallery/static/img/1-480.jpg 480, https://sachinchoolur.github.io/lightGallery/static/img/1.jpg 800'
  }, {
    fullres: 'https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg',
    thumbnail: 'https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg',
    title: 'Test2',
    subhtml: '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>',
    responsive: 'https://sachinchoolur.github.io/lightGallery/static/img/1-375.jpg 375, https://sachinchoolur.github.io/lightGallery/static/img/1-480.jpg 480, https://sachinchoolur.github.io/lightGallery/static/img/1.jpg 800'
  }, {
    fullres: 'https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg',
    thumbnail: 'https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-3.jpg',
    title: 'Test3',
    subhtml: '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>',
    responsive: 'https://sachinchoolur.github.io/lightGallery/static/img/1-375.jpg 375, https://sachinchoolur.github.io/lightGallery/static/img/1-480.jpg 480, https://sachinchoolur.github.io/lightGallery/static/img/1.jpg 800'
  }, {
    fullres: 'https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg',
    thumbnail: 'https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-4.jpg',
    title: 'Test4',
    subhtml: '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>',
    responsive: 'https://sachinchoolur.github.io/lightGallery/static/img/1-375.jpg 375, https://sachinchoolur.github.io/lightGallery/static/img/1-480.jpg 480, https://sachinchoolur.github.io/lightGallery/static/img/1.jpg 800'
  }, {
    fullres: 'https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg',
    thumbnail: 'https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg',
    title: 'Test5',
    subhtml: '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>',
    responsive: 'https://sachinchoolur.github.io/lightGallery/static/img/1-375.jpg 375, https://sachinchoolur.github.io/lightGallery/static/img/1-480.jpg 480, https://sachinchoolur.github.io/lightGallery/static/img/1.jpg 800'
  }];

  for (var i = 0; i < $scope.photos.length; i++) {
    $scope.photos[i].fullres = $sce.trustAsResourceUrl($scope.photos[i].fullres);
  }

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