const input = require('fs').readFileSync('testInput.txt').toString().split('\n').map(BigInt);
let answer = input[0] + input[1] + '\n';
answer += input[0] - input[1] + '\n';
answer += input[0] * input[1];

console.log(answer);