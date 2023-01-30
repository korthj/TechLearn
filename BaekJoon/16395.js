const [n,k] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(Number);

const arr = Array.from(Array(n+1), () => new Array(n+1).fill(0));

arr[1][1] = 1;

for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
    };

};

console.log(arr[n][k]);