//1015번 수열 정렬 문제,
const [N,input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));
const arr = input.slice().sort((a, b) => a-b);
const P = Array(N).fill(-1);
input.forEach((v, i) => {
    P[i] = arr.findIndex((e, idx) => {
        if (e === v && !(P.includes(idx))) return true;
    });
});
console.log(P.join(" "));
