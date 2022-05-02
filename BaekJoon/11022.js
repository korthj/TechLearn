//A+B-8
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split('\n').map(v => v.split(' ').map(Number));
const T = input[0];
let answer = '';
for(let i=1;i<=T;i++){
    answer += 'Case #'+i+': '+input[i][0]+' + '+input[i][1]+' = '+(input[i][0]+input[i][1]) +'\n';
};
console.log(answer);
