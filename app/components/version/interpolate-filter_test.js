'use strict';
import 'angular';
import 'angular-mocks';
import 'app/components/version/interpolate-filter.js';

describe('myApp.version module', function() {
  beforeEach(angular.mock.module('myApp.version.interpolate-filter'));

  describe('interpolate filter', function() {
    beforeEach(angular.mock.module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
