const input = require('fs').readFileSync('testInput.txt').toString().split(" ");
const a = Number(input[0].split("").reverse().join(""));
const b = Number(input[1].split("").reverse().join(""));
console.log(a>b ? a:b);