const input = require("fs").readFileSync("testInput.txt").toString();
let num = "0b" + input;
const result = (BigInt(num) * 17n).toString(2);
console.log(result);