const [N] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(Number);

console.log(N%2 === 0 ? "CY":"SK");