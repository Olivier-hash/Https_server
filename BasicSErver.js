// basicServer.js 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>🏠 Welcome to the Home Page</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>📞 Contact Us at contact@example.com</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>❌ 404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("✅ Server is listening on http://localhost:3000");
});

// de  start form added status account fiel