const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));
let result = 0;
input[1].find(v => {if(v === input[0][0])result++;});
console.log(result);