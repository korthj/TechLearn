const [N, ...t] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

t[0].sort((a,b) => b-a);
let result = 0;

for (let i = 0; i < N; i++) {
    result = Math.max(result, t[0][i] + i + 1);
};

result += 1;
console.log(result);