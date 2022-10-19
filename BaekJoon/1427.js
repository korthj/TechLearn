const input = require("fs").readFileSync("testInput.txt").toString().trim().split("").map(v => Number(v));
console.log(input.sort((a,b) => b-a).join(""));