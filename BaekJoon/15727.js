const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const answer = Number(input);
console.log(Math.ceil(answer/5));