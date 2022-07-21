const [L, A, B, C, D] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);

const result = L-(Math.ceil(A/C)>Math.ceil(B/D)?Math.ceil(A/C):Math.ceil(B/D));
console.log(result);