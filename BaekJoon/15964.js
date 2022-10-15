const [a, b] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(v => Number(v));
console.log((a+b)*(a-b));