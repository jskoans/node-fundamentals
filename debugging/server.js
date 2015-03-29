'use strict';
// npm install -v node-inspector
// launch this server.js program with
// node-debug debugging.server.js (from project root)
// or 
// cd debugging; node-debug server.js
// two browser windows
// (1) run localhost:3000 in one window
// (2) program execution will be halted in chrome's dev-tools, on localhost:8080/debug?port=5858

var http = require('http');

http.createServer(function (req, res) {
  debugger;
  var foo = 5 > 7 ? 'bar' : 'foo';
  debugger;
  res.write(foo);
  res.end();
}).listen(3000);
