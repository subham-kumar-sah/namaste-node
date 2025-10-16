const fs = require("fs");

setImmediate(() => {
  console.log("setImmediate called");
});

setTimeout(() => {
  console.log("Timer called");
}, 0);

Promise.resolve(() => console.log("Promise resolved")).then((fn) => fn());

fs.readFile("./file.txt", "utf8", () => {
  console.log("File read");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("Process nextTick inside nextTick");
  });
  console.log("Process nextTick called");
});

console.log("last line of code");
