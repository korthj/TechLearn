const input = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(Number);

console.log((input[1]*2)-input[0]);