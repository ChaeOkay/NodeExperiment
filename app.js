//http://nodeguide.com/beginner.html


console.log('Hello World');

var http = require('http');
// core module http library
// can require other .js files;

var server = http.createServer(function(request, response) {
// closure - non-blocking, callback function request and response

  response.writeHead(200); // status code in header
  response.write("Hello, this is node.js") //response body
  response.end('Hello Http'); // close the connecttion
});
server.listen(8080); // listen for connections on this port