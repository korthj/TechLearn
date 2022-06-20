const input = require('fs').readFileSync('testInput.txt').toString().split('\n').map(v => v.split(' ').map(Number));
let answer = 0;

for(let i in input[1]){
    if(input[1][i] === input[2][0]){
        answer++;
    }
}
console.log(answer);