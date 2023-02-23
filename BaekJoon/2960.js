//2960번 에라토스테네스의 체 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [n,k] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [];
for (let i=2; i<=n; i++) arr.push(i);
let count = 0;
let prime, result;

while (count < k) {
    prime = arr[0];
    arr.some(v => {
        if (v % prime === 0) {
            //소수를 배열에서 찾아 제거, 배열에서 해당 인덱스가 사라지니, some 함수에서 다음 순서 인덱스 호출시 하나씩 건너 뛰게 됌.
            arr.splice(arr.indexOf(v), 1);
            result = v;
            count++;
        };
        if (count === k) return true;
    });
};

console.log(result);