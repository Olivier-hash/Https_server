
const http = require('http');

const server = http.createServer((req, res)=>{
    res.WriteHead(200, { "content-Type": "text/plain"});
     res.end("Hello from Node.js HTTP Server!");
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000/");
});