'use strict';

var b = new Buffer('hello');

console.log(b);  // <Buffer 68 65 6c 6c 6f>

console.log(b.toString()); // hello

console.log(b.toString('base64'));  // aGVsbG8=

console.log(b.toString('utf-8', 0, 2));  // he

var v = new Buffer('world').toString('base64');

console.log(v);  // d29ybGQ=
