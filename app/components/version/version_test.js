'use strict';
import 'angular';
import 'angular-mocks';
import 'app/components/version/version.js';

describe('myApp.version module', function() {
  beforeEach(angular.mock.module('myApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
