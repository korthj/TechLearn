const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
const a = input[0].split(' ')[1];
const list = input[1].split(' ').map((x) => +x).sort((a, b) => b - a);
console.log(list[a - 1]);