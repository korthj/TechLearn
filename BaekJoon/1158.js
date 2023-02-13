//1158번 요세푸스 문제,
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
let [N,K] = require('fs').readFileSync(filePath).toString().trim().split(" ").map(Number);
const queue = Array.from({length: N}, (v,i) => i+1);
let result = "<";
while(queue.length){
    for (let i = 0; i < K; i++) {
        queue.push(queue.shift());
    };

    if (queue.length === 1) {
        result += `${queue.pop()}>`;
    } else {
        result += `${queue.pop()}, `;
    };
};

console.log(result);
