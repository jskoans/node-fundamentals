'use strict';

// we use amdefine instead of nodejs commonjs module.exports because
// jasmine-node is actually a browser unit tester
if (typeof define !== 'function') { var define = require('amdefine')(module); }

var multiply = function(a, b) {
  return a * b;
};

define([], function() {
  return multiply;
});
