const [N, M] = require('fs').readFileSync("testInput.txt").toString().trim().split(' ').map(BigInt);

const answer = BigInt(N * M / 2n);

console.log(answer.toString());