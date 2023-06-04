//1822번 차집합 문제, 정렬 한 뒤 투포인터 활용
const [n, A, B] = require("fs").readFileSync("testInput.txt").toString().split("\n").map( v => v.split(" ").map(Number).sort((a, b) => a - b));

let aPointer = 0;
let bPointer = 0;
let diff = [];

//
while (aPointer < A.length && bPointer < B.length) {
    if (A[aPointer] < B[bPointer]) {
        diff.push(A[aPointer]);
        aPointer++;
    } else if (A[aPointer] > B[bPointer]) {
        bPointer++;
    } else {
        aPointer++;
        bPointer++;
    };
};

for (let i = aPointer; i < A.length; i++) {
    diff.push(A[i]);
};

console.log(diff.length);
if(diff.length > 0) console.log(diff.join(" "));