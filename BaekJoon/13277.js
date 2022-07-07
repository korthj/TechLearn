const input = require("fs").readFileSync("testInput.txt").toString().split(" ").map(BigInt);
const result = input[0]*input[1];
console.log(result.toString());