const [N,...input] = require('fs').readFileSync("testInput.txt").toString().trim().split("\n").map(v=>v.trim()); 
const num = input[0].split(' ').map(v=>+v);
const answer = [...new Set(num)].sort((a,b)=>a-b)

console.log(answer.join(' '))