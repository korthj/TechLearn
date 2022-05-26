const input = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(Number);
let result = input.map(v => v*v).reduce((a,b) => a+b);
console.log(result%10);