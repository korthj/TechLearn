// const inpot = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split('\n').map(v => v.split(' ').map(Number));

for(let i=1;i<=input[0];i++){
    console.log(input[i][0]+input[i][1]);
};