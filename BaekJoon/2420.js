const [N, M] = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(v => parseInt(v));
console.log(Math.abs(N-M));