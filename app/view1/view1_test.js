'use strict';
import 'angular';
import 'angular-route';
import 'angular-mocks';
import 'app/view1/view1.js';

describe('myApp.view1 module', function() {

  beforeEach(angular.mock.module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
