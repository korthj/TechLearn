const [N,...input] = require('fs').readFileSync('testInput.txt').toString().trim().split('\n');

const setArr = input[0].split(' ').map(Number).sort((a,b)=>a-b);
const set = new Set(setArr);
const map = new Map();

[...set].forEach((item, index) => {
    map.set(item, index);
})

let answer = '';
input[0].split(' ').forEach((item, index) => {
   answer += map.get(+item) + ' ';
})

console.log(answer);