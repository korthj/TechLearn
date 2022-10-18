const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(v => Number(v));

console.log(parseInt(input[2]/input[1]), parseInt(input[2]%input[1]));