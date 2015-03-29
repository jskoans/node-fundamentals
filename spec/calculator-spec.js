'use strict';

// we use amdefine instead of nodejs require because
// jasmine-node is actually a browser unit tester

// run `jasmine-node spec`

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['../testing/calculator.js'], function(multiply) {

  describe('multiplication', function() {
    it('should multiply 2 and 3', function() {
      var product = multiply(2, 3);
      expect(product).toBe(6);
    });
  });

});
