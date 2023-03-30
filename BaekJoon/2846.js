//2846번 오르막길 문제, 이전 값과 비교하여 연속하여 증가하는 수치를 구하면 된다.
const [N,input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));

let result = 0;
let sum = 0;


for(let i=0; i<N; i++) {
    if(input[i] - input[i-1] > 0) sum += input[i] - input[i-1];
    else {
        result = Math.max(result, sum);
        sum = 0;
    }
}

console.log( Math.max(result, sum));