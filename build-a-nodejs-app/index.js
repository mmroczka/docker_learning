const http = require("http");

const PORT = 3000;

http
  .createServer(function (request, response) {
    console.log("request received");
    response.end("omg hi", "utf-8");
  })
  .listen(PORT);

console.log("server started");
