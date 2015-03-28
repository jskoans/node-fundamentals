'use strict';

// npm install should --save-dev
// npm install -g mocha
// mocha testing/mocha.js

var should = require('should');
var fun = require('../modules/mathfun');

describe('MathFun', function() {

  describe('when used synchronously', function() {
    
    it('should double even numbers correctly', function() {
      fun.evenDoublerSync(2).should.equal(4);
    });

    it('should throw on odd numbers', function(done) {
      (function() { fun.evenDoublerSync(3); }).should.throw(/Odd/);
      done();
    });

  });

  describe('when used asynchronously', function() {

    it('should double even numbers correctly', function() {
     
      fun.evenDoubler(2, function(err, results) {
        should.not.exist(err);
        results.should.equal(4);
        done(); 
      });

    });

    it('should throw on odd numbers', function() {

       fun.evenDoubler(3, function(err, results){
         should.exist(err);
         should.not.exist(results);
         done();
       });
    
    });
  
  });

});
