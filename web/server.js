'use strict';

var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
  // process request
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/file.txt') {
    fs.createReadStream(__dirname + '/file.txt').pipe(res);
  } else {
    res.end('Hello World');
  }
}).listen(process.env.PORT || 8080, process.env.IP || '127.0.0.1');


console.log('Server running!');


// Run this server with your custom port and ip like this
// export PORT=7070; export IP="127.0.0.1"; node server
// or
// node server, which will use the given defaults 8080 port

// Browsing to
// 127.0.0.1:8080 will give us 'Hello World'
// 127.0.0.1:8080/file.txt will give us contents in the file
