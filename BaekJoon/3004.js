const input = require('fs').readFileSync("/dev/stdin").toString().trim();

const n = Number(input)
const row = Number(n/2);
const column = Number(n - row);

const answer = parseInt((row + 1) * (column + 1));
console.log(answer);