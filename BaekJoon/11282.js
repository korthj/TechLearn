const input = require('fs').readFileSync("testInput.txt").toString().trim();

const answer = String.fromCharCode(Number(input)+44031);

console.log(answer);