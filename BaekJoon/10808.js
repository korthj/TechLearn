const input = require("fs").readFileSync("testInput.txt").toString().trim().split("");
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const arr = Array(26).fill(0);
input.forEach(v => arr[alpha.indexOf(v)]++);
console.log(arr.join(" "));