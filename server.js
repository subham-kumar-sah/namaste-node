//importing http module
const http = require("http");

//creating http server, receiving request and sending response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello This is Home Page");
  } else if (req.url === "/about") {
    res.end("Hello This is Subham, I am a web developer");
  }
});

//making server listen on port 7777
server.listen(7777);
