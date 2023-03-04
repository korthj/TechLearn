//9372번 상근이의 여행 문제, 비행기 종류의 최소 개수 즉, N을 구하여 -1하면 주어진 N개의 국가를 여행하기 위한 최소를 구할 수 있다.ex)5개 국가면 한번씩 탄다고 하였을 때 4번
const [T, ...input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map( v => v.split(" ").map(Number));
let arr = input.splice(0);
let result = [];

for (let i = 0; i < T; i++) {
    let N = arr[0][0];
    let M = arr[0][1];
    arr.shift();

    for(let j = 0; j < M; j++) {
        arr.shift();
    };

    result.push(N - 1);
};

console.log(result.join("\n"));
