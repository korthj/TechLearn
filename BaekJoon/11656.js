//11656번 접미사 배열 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");

const stack = [...input];
const tmp = [];
let answer = [];
for(let i = 0; i < input.length; i++){
    //unshift 사용하여 배열 맨 앞에 추가.
    tmp.unshift(stack.pop());
    answer.push(tmp.join("").trim());
};
console.log(answer.sort().join("\n").trim());