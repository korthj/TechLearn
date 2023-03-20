//2670번 연속부분최대곱 문제
const [N,...input] = require('fs').readFileSync("testInput.txt").toString().trim().split("\n").map(Number);

let temp = input[0];
let result = 0;

for (let i = 1; i < N; i++) {
    if (input[i] > temp * input[i]) temp = input[i];
    else temp *= input[i];
    result = Math.max(temp, result);
};


console.log((result).toFixed(3));