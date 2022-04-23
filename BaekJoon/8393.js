const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ');
let result = 0;
for(let i=1;i<=input[0];i++)result+=i;
console.log(result);