// Intro to HTTP module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Us");
  }

  res.end(`<h1>Oops!</h1>
  <p>seems we lost the page</p>
  <a href="/">Go Home</a>`);
});

server.listen(5000);
