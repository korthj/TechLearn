const input = require('fs').readFileSync('./testInput.txt').toString().split('\n');
const N = Number(input[0]);
const num = input.map(v => v.split('').map(Number))[1];
let result = 0;
for(let i=0; i<N; i++){
   result += num[i];
}
console.log(result);