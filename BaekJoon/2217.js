//2217번 로프 문제     
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [n,...input] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);
input.sort((a, b) => a-b);
let min = input[0]*n;
for (let i=1; i<n; i++) {
    //i번째의 로프이면, 그 앞의 더 약한 로프는 제외한 수를 계산한다. => (n-1),ex)5,10,15,20일 경우 3번째의 15+15는 30.
    weight = input[i]*(n-i);
    if (min < weight) min = weight;
};
console.log(min);