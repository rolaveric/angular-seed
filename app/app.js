'use strict';
import 'angular';
import 'angular-route';
import './components/version/version';
import './components/version/interpolate-filter';
import './components/version/version-directive';
import './view1/view1';
import './view2/view2';

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
