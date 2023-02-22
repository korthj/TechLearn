//11656번 접미사 배열 문제, unshift,pop 이용하여 맨 뒤부터 새 배열 앞에 삽입하여 생성하는 식으로 간단하게 해결
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");

const stack = [...input];
const tmp = [];
let answer = [];
for(let i = 0; i < input.length; i++){
    tmp.unshift(stack.pop());
    answer.push(tmp.join("").trim());
};
console.log(answer.sort().join("\n").trim());