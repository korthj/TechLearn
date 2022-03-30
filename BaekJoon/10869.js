// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ');
const arr = [];
const solution = (A, B) => {
    //
    arr.push(A+B);
    arr.push(A-B);
    arr.push(A*B);
    arr.push(Math.floor(A/B));
    arr.push(A%B);
    return arr;
};
solution(input[0],input[1]);
for(let i of arr){
    console.log(i);
};