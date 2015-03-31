'use strict';

var _ = require('lodash');

var obj = {
  code: 2,
  persistence: true
};

console.log( _.some([obj], {code: 2}) );
console.log( _.some([obj], {code: 3}) );
console.log( _.some([obj], {code: 2, persistence: false}) );
console.log( _.some([obj], {code: 2, persistence: true}) );

