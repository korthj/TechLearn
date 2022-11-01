const [a,b,c,d] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(v => Number(v));
console.log((a*b)+(c*d));