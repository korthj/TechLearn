const input = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(Number).sort((a,b) => a-b);
console.log(...input);