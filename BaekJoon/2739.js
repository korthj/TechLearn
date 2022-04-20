// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ');
for(let i=1;i<=9;i++){
    console.log(`${input[0]} * ${i} = ${input[0]*i}`);
};