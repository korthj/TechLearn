const input = require("fs").readFileSync("testInput.txt").toString().split(" ");
const a = Number(input[0]+input[1]);
const b = Number(input[2]+input[3]);
console.log(a+b);