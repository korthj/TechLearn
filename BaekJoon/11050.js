const [N,K] = require('fs').readFileSync("testInput.txt").toString().trim().split(" ").map(v => +v);

let n = 1;
let r = 1;

for (let i = N-K+1; i <= N; i++) {
  n *= i;
};

for (let i = 1; i <= K; i++) {
  r *= i
};


console.log(n / r);