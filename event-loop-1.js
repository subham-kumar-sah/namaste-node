const fs = require("fs");
const a = 100;

setImmediate(() => {
  console.log("setImmediate called");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("File read");
});

setTimeout(() => {
  console.log("Timer called");
}, 0);

function printA() {
  console.log(a);
}

printA();
console.log("This is the last line of code");
