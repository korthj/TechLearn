const input = require('fs').readFileSync("testInput.txt").toString().trim();

const answer = input.charCodeAt()-44031;

console.log(answer);