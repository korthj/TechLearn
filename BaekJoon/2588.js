const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = ['472', '385'];
const A = input[0];
const B = input[1];
const arr = [];
arr.push(B.split(''));
const result = [];

for(let i=0;i<arr[0].length;i++){
    result[i] = A*arr[0][i];
};
for(let i of result.reverse()){
    console.log(i);
};
console.log(A*B);

