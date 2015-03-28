'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

// waits for user's input in stdin
process.stdin.on('data', function(chunk) {
  // writes user's input to stdout
  process.stdout.write('Data -> ' + chunk);
});

// Ctrl+d will trigger the 'end' event for our waiting process
process.stdin.on('end', function() {
  // And it will spit out 'End!' when that happens
  process.stderr.write('End!\n');
});

// Try `kill -TERM [pid]` 
process.on('SIGTERM', function() {
  process.stderr.write('Why are you trying to terminate me??? :-)\n');
});

console.log('Node is running as process # ' + process.pid);
