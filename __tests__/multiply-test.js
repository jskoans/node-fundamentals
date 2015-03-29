'use strict';

jest.dontMock('../testing/calculator2');

describe('multiplication', function() {
  it('should multiply 2 and 3', function() {
    var multiply = require('../testing/calculator2');
    var product = multiply(2, 3);
    expect(product).toBe(6);
  });
});
