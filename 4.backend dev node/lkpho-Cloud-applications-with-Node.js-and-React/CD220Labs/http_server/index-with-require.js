const http = require("http");
const today = require("./today");

const requestListener = function (req, res) {
  res.writeHead(200);

  res.end(
    `Hello, ${
      today.getDate().getHours() < 12
        ? "Good Morning"
        : today.getDate().getHours() >= 12 && today.getDate().getHours() <= 18
        ? "Good Afternoon"
        : "Good Evening"
    }! The date today is ${today.getDate()}`
  );
};

const port = 8080;
const server = http.createServer(requestListener);
console.log("server listening on port: " + port);
server.listen(port);
