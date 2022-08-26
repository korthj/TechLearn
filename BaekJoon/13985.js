const input = require("fs").readFileSync("testInput.txt").toString().split(" ");
const a = Number(input[0]);
const b = Number(input[2]);
const c = Number(input[4]);
console.log( a+b == c ? "YES" : "NO");