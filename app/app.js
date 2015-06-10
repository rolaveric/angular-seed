'use strict';
import 'angular';
import 'angular-route';
import 'app/components/version/version.js';
import 'app/components/version/interpolate-filter.js';
import 'app/components/version/version-directive.js';
import 'app/view1/view1.js';
import 'app/view2/view2.js';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
