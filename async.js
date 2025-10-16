//Requiring the http and fs modules before we can use them
const http = require("http");
const fs = require("fs");

console.log("First line of code");

var a = 2323;
var b = 3434;

fs.readFileSync("./file.txt", "utf8");
console.log("File read");

http.get("http://www.google.com", (res) => {
  console.log("Got response: " + res.statusCode);
});

setTimeout(() => {
  console.log("Timer called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File data: " + data);
});

function multiplyFn(a, b) {
  return a * b;
}

var c = multiplyFn(a, b);
console.log(c);

console.log("Last line of code");
