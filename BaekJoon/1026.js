//1026번 보물 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
let [num,...input] = require('fs').readFileSync(filePath).toString().trim().split("\n");

let a = input[0].split(' ').map((e)=>parseInt(e)).sort((a,b)=>a-b);
let b = input[1].split(' ').map((e)=>parseInt(e)).sort((a,b)=>b-a);

let sum = 0;
for(let i = 0; i < num; i++){
    sum += a[i] * b[i];
};

console.log(sum);