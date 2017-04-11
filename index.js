const http = require('http');

// This server will respond to all requests (regardless of path) with "hello world"
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("hello world");
});

server.listen(80);
