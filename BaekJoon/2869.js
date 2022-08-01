const [ A, B, V ] = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
console.log(Math.ceil((V-B)/(A-B)));