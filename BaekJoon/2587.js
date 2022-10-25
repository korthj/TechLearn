const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => Number(v));
input.sort((a, b) => a - b);
let sum = input.reduce((past, curr) => past + curr, 0);

console.log(sum / 5 + "\n" + input[2]);