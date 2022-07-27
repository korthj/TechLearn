const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v=>v.split(" ").map(Number));
const [A,B] = input[0];
const [C,D] = input[1];
const result = A + D >= B + C ? B + C : A + D; 
console.log(result);