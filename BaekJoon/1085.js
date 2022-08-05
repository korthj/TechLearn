const input = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
const counters = [x, y, w - x, h - y];
 
console.log(Math.min.apply(null, counters));