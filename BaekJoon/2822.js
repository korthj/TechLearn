const input = require('fs').readFileSync('testInput.txt').toString().split('\n').map(n=>parseInt(n));
let arr = input.map(n=>parseInt(n)).sort((a,b)=>b-a);
let sumArr = arr.slice(0,5);
let leng = sumArr.length;
let sum = 0;
let answer = [];

for(let i=0; i<leng; i++){
    sum += sumArr[i];
};

for(let i=0; i<leng; i++){
    answer.push(input.indexOf(sumArr[i])+1);
};

answer.sort((a,b)=>a-b);
console.log(sum);
console.log(answer.join(' '));