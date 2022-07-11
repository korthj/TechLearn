const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(Number);
let result = 0;
for(let i of input){
    if(i < 40) result += 40;
    else result += i;
};
console.log(parseInt(result/5));
