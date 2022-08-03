const input = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
console.log(input.sort((a,b) => a-b)[1]);