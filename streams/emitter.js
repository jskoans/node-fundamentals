'use strict';

var Resource = require('./resource2');

var r = new Resource(5);

r.on('start', function() {
  console.log('I have started!');
});

r.on('data', function(d) {
  console.log('  I received data -> ' + d);
});

r.on('end', function(t) {
  console.log('I\'m done, with ' + t + ' data events.');
});
