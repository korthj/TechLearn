const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v=>v.split(" ").map(Number));
const min = input[0].reduce((v,i) => v+i);
const man = input[1].reduce((v,i) => v+i);
console.log(min >= man ? min : man);
