const input = require('fs').readFileSync('./testInput.txt').toString().trim().split('\n').map(v=>v.split(' ').map(Number));
const N = input[0];
let max = input[1][0];
let min = input[1][0];
for(let i=1;i<=N;i++){
    if (max < input[1][i]) {
        max = input[1][i];
      }
      
      if (min > input[1][i]) {
        min = input[1][i];
      }
}
console.log(`${min} ${max}`);