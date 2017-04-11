const http = require('http');

// This server will respond to all requests (regardless of path) with "hello world"
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("hello world");

  // Put a message in the logs as well unless that's been disabled:
  if (process.env.NO_DEBUG) { return; }
  console.log(`Requested ${request.url}`);
});

server.listen(80);
console.log('Server is now listening');
