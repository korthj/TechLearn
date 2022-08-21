const [ A, B, C, D ] = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number).sort((a,b) => a-b);
console.log(Math.abs((A+D)-(B+C)));