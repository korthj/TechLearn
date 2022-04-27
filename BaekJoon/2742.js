const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ').map(Number);
let answer = '';
for(let i=input[0];i>=1;i--) answer += i+'\n';
console.log(answer);