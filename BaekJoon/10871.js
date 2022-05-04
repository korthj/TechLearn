const input = require('fs').readFileSync('./testInput.txt').toString().trim().split('\n').map(v => v.split(' ').map(Number));
const N = input[0][0];
const X = input[0][1];
const arr = input[1].filter(v => v < X);
let result = '';
for(let i in arr) result += arr[i]+' ';
console.log(result);