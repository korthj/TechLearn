const input = require('fs').readFileSync('./testInput.txt').toString().split('\n').map(v => v.split(' ').map(Number));

const max = Math.max(...input[1]);
let avg = 0;
for(let i=0; i<input[0][0];i++){
    avg += input[1][i]/max*100;
};
console.log(avg/input[0][0]);