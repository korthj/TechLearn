//2331번 반복수열 문제
const [A, P] = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
const arr = [A];
for(;;) {
    const cur = String(arr[arr.length-1]);
    const next = cur.split("").reduce((acc, v) => acc + Number(v)**P, 0);
    if (arr.includes(next)) {
        console.log(arr.indexOf(next));
        break;
    };
    arr.push(next);
};