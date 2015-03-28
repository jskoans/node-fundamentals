'use strict';

var assert = require('assert');
var fun = require('../modules/mathfun.js');

// testing the synchronous version
assert.equal(fun.evenDoublerSync(2), 4);
assert.throws(function() {
  fun.evenDoublerSync(3);
},/Odd/);  // /Odd/ is a regular expression, testing that there's a word 'Odd' in our thrown Error message

// testing the asynchronous version
fun.evenDoubler(2, function(err, results) {
  assert.ifError(err);
  assert.equal(results, 4, 'evenDoubler failed on an even number');
});

fun.evenDoubler(3, function(err, results) {
  assert.notEqual(err, null);
});
