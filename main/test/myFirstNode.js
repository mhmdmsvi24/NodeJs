var http = require("http");
var url = require("url");
var fs = require("fs");
var dt = require("../modules/myfirstmodule");
const { log } = require("console");

function httpWrite() {
  http
    .createServer(function (req, res) {
      res.writeHead(200, { "Content-Type": "text/html" }); // include header
      res.write(
        req.url + "\n welcome to the first http request: " + dt.myDateTime()
      ); //write a response to the client
      res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080
}

function httpReadURL() {
  http
    .createServer(function (req, res) {
      res.writeHead(200, { "Content-Type": "text/html" }); // include
      var q = url.parse(req.url, true).query;
      var txt = q.year + " " + q.month;
      res.end(txt); //end the response
    })
    .listen(8080); //the server object listens on port 8080
}

function httpReadFile() {
  http
    .createServer(function (req, res) {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    })
    .listen(8080);
}

// lets append a file to the sending document
function httpAppend() {
  // fs.appendFile("./extraMessage.txt", "Hello content!", function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  var adr = "http://localhost:8080/?year=2017&month=July";
  var q = url.parse(adr, true);

  var URLResp = {
    host: q.host,
    path: q.path,
    search: q.search,
  };

  http
    .createServer(function (req, res) {
      fs.readFile(URLResp["host"], function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    })
    .listen(8080);
}

// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error

function advanceHTTPReq() {
  http
    .createServer(function (req, res) {
      var q = url.parse(req.url, true);
      var fileName = "." + q.pathname;

      fs.readFile(fileName, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    })
    .listen(8080);
}

advanceHTTPReq();
