//기본 자료형에는 한계가 있다.
const input = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(BigInt);
console.log((input[0]+input[1]).toString());