const input = require('fs').readFileSync('./testInput.txt').toString().split('\n').map(Number);
console.log(input[0]+input[1])