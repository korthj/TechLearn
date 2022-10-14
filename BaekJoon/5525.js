const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => Number(v));
let num = 0;
for(let i of input){
    num += i;
};
console.log(num);