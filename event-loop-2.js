const fs = require("fs");
const a = 100;

setImmediate(() => {
  console.log("setImmediate called");
});

Promise.resolve(() => console.log("Promise resolved")).then((res) => res());

fs.readFile("./file.txt", "utf8", () => {
  console.log("File read");
});

setTimeout(() => {
  console.log("Timer called");
}, 0);

process.nextTick(() => {
  console.log("Process nextTick called");
});

function printA() {
  console.log(a);
}

printA();
console.log("last line of code");
