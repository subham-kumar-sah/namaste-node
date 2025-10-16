const {
  num1,
  calculateSum,
  calculateMultiply,
} = require("./calculate/index.js");
const data = require("./data.json");

console.log(data);
let a = 10;
let b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
console.log(`The value of num1 imported from sum.js is ${num1}`);
