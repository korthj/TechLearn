const [N,...input] = require('fs').readFileSync("testInput.txt").toString().trim().split("\n"); 

console.log(input.sort((a,b) => b-a).join(' '));