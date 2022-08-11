const input = require("fs").readFileSync("testInput.txt").toString();
const num = Number(input) % 8;

console.log(num == 0 ? 2 : num == 6 ? 4 : num == 7 ? 3 : num);
