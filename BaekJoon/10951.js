const input = require('fs').readFileSync('./testInput.txt').toString().trim().split('\n').map(v=>v.split(' ').map(Number));
let result = '';
for(let i=0;i<input.length;i++)result += (input[i][0]+input[i][1])+'\n';
console.log(result);