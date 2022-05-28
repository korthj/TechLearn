const input = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(Number);
console.log(input[0]*(input[1]-1)+1);