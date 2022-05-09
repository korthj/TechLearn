const input = require('fs').readFileSync('./testInput.txt').toString().split(' ').map(Number);

let answer = 0;
let sum;
let num = input[0];
while(true){
    answer++;
    sum = Math.floor(num/10) + num%10;
    num = (num%10)*10+sum%10;
    if(input[0] === num){
        break;
    };
};

console.log(answer);