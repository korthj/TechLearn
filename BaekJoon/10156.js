const input = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
console.log((input[0]*input[1])-input[2]>0 ? input[0]*input[1]-input[2] : 0);