const [S, T, D] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

console.log(D/(S*2) * T);