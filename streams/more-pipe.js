'use strict';

var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

// gzip our incoming request stream first, then write it out to a html file
request('http://www.google.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('google.html.gz'));

// zcat in Mac OS X appends a .Z to the file which screws things up
// So instead, we will
// now use gunzip -c google.html.gz to see that it spits out a html file
