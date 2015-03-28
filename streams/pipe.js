'use strict';

var request = require('request');
var fs = require('fs');

//var s = request('http://www.google.com');

//s.pipe(process.stdout);

// Equivalent
//request('http://www.google.com').pipe(process.stdout);

request('http://www.google.com').pipe(fs.createWriteStream('google.html'));

// now use cat google.html to see that this is our html file
