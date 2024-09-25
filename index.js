const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url} : new req received\n`;
  fs.appendFile("./respose.txt", log, (data) => {
    switch (req.url) {
      case "/":
        res.end("hello from home page");
        break;
      case "/about":
        res.end("Myself Vikas Saxena");
        break;
      case "/contact":
        res.end("contact me");
        break;
      default:
        res.end("404 not found");
    }
  });
  console.log("new req rec.");
});
myServer.listen(8000, () => console.log("server start"));
