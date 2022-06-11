const input = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(Number);
const condition = [1,1,2,2,2,8]
const answer = [];
for(let i in input) answer.push(condition[i]-input[i]);
console.log(answer.join(' '));