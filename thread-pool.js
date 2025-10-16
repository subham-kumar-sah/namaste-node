const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("1: Password encrypted");
});
crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("2: Password encrypted");
});
crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("3: Password encrypted");
});
crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("4: Password encrypted");
});
