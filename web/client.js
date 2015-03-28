'use strict';

var http = require('http');

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log('Going to make a request');

// Using a simple url
//var req = http.request('http://www.google.com', function(response) {
  //console.log(response.statusCode);
  //response.pipe(process.stdout);
//});

//req.end();

// Using options
var req = http.request(options, function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});

req.end();
