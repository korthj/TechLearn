const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map( (v) => Number(v));
input.shift();
const result = input.sort((a,b) => a-b)
console.log(result.join("\n"));
