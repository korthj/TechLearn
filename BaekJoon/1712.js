const input = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(Number);
const [a,b,c] = input;
const result = Math.floor(a/ (c-b) + 1);
console.log(b>=c ? -1 : result);

  