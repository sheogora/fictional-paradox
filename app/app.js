'use strict';

console.log('app.js is running');

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.services',
  'myApp.directives'
]).
config(['$routeProvider', function($routeProvider) {
  // $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

var myServices = angular.module('myApp.services', []);
var myDirectives = angular.module('myApp.directives', []);


// var connect = require('connect'),
//     sassMiddleware = require('node-sass-middleware');

// var srcPath = __dirname + '/sass';
// var destPath = __dirname + '/app/styles';

// var serveStatic = require('serve-static')
// var http = require('http');
// var port = process.env.PORT || 8000;
// var app = connect();
// app.use('/styles', sassMiddleware({
//   src: srcPath,
//   dest: destPath,
//   debug: true,
//   outputStyle: 'expanded'
// }));
// app.use('/',
//   serveStatic('./app', {})
// );

// http.createServer(app).listen(port);
// console.log('Server listening on port ' + port);
// console.log('srcPath is ' + srcPath);
// console.log('destPath is ' + destPath);