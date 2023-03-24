//2669번 직사각형 네개의 합집합의 면적 구하기
const str = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const arr = Array.from(new Array(101),() => new Array(101));
for (let i = 0; i < 4; i++) {
    let x = str[i][0];
    let y = str[i][1];
    let p = str[i][2];
    let q = str[i][3];

    for (let j = y; j < q; j++) {
        for (let k = x; k < p; k++) {
            arr[j][k] = 1; 
        }
    }
}
let cnt = 0;
for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
        if (arr[i][j] == 1)
            cnt++;
    }
}
console.log(cnt);