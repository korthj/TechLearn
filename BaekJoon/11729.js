const input = require('fs').readFileSync("testInput.txt").toString().trim();
let N = Number(input);
let count = 0;
let answer = [];

recursion = (num, from, other, to) => {
    if(num === 0) {
        return;
    }else{
        recursion(num - 1 , from, to, other);
        answer.push([from, to]);
        count++;
        recursion(num - 1, other, from, to);
    };
};
recursion(N, '1','2','3');
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));