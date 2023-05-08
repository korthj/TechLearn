//1312번 소수 문제
const [a,b,n] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(Number);

let result = a % b;

for(let i = 0; i < n-1; i++){
    result *= 10;
    result %= b;
};

result *= 10;

console.log(Math.floor(result/b));