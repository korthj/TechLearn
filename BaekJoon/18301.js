const [a,b,c] = require('fs').readFileSync("testInput.txt").toString().trim().split(' ').map(Number);
const result = parseInt(((a + 1)*(b + 1))/(c + 1) -1);
console.log(result);