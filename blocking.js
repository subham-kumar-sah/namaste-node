const crypto = require("crypto");

console.log("Starting the process...");

var a = 2323;
var b = 3434;

//Cannot be offloaded to libuv thread pool as it is a sync function
crypto.pbkdf2Sync("password", "salt", 1000000, 512, "sha512");

console.log("Intermediate log");

//Can be offloaded to libuv thread pool as it is an async function and has a callback function
crypto.pbkdf2("password", "salt", 1000000, 512, "sha512", (err, derivedKey) => {
  console.log("Password encrypted");
});

function multiplyFn(a, b) {
  return a * b;
}

var c = multiplyFn(a, b);
console.log(c);

console.log("Process ended");
