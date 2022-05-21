const input = require('fs').readFileSync('./testInput.txt').toString().split('\n');
const N = Number(input[0]);
let result = 1;
for(let i=N; i>0; i--){
   result = result*i;
}
console.log(result);