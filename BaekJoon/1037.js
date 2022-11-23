const [num,...input] = require('fs').readFileSync('testInput.txt').toString().split('\n');

const nums = input[0].split(" ").sort((a,b)=>a-b);

const max = Math.max(...nums);
const min = Math.min(...nums);
let answer = 0;

(nums.length>=2) ? (answer =  max*min) : (answer = min*min);
console.log(answer);