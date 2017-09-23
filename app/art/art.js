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
    fullres: 'img/widow.jpg',
    thumbnail: 'img/widow-thumb.jpg',
    title: 'Widowmaker',
    subhtml: '<h4>Widowmaker</h4><p>Fan art of Widowmaker character from Overwatch video game. Drawn using Photoshop CS6.</p>'
  }, {
    fullres: 'img/katvond2.jpg',
    thumbnail: 'img/katvond2-thumb.jpg',
    title: 'Seeing Double',
    subhtml: '<h4>Seeing Double</h4><p>Inspired by Kat Von D Saint and Sinner perfume trailer. Drawn using Photoshop CS6.</p>'
  }, {
    fullres: 'img/spot-blu.jpg',
    thumbnail: 'img/spot-blu-thumb1.jpg',
    title: 'Spot the Blue',
    subhtml: '<h4>Spot the Blue</h4><p>One of my most proudest art works. The contrast between the sharp blue eye and the perspective blend gives this painting softness and innocence. Drawn using Photoshop CS6.</p>'
  }, {
    fullres: 'img/fishy.jpg',
    thumbnail: 'img/fishy-thumb.jpg',
    title: 'Whale Shark',
    subhtml: '<h4>Whale Shark</h4><p>An underwater scene of a diver meeting a whale shark. Drawn using Photoshop CS6.</p>'
  }, {
    fullres: 'img/froggo.jpg',
    thumbnail: 'img/froggo-thumb.jpg',
    title: 'Red-eyed tree frog',
    subhtml: '<h4>Red-eyed tree frog</h4><p>A painting of a Red-eyed tree frog. One of the first photoshop drawing I ever did. Drawn using Photoshop CS6.</p>'
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