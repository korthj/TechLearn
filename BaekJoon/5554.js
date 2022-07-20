const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);
let sec = 0;
let min = 0;
for(let i of input){
    sec += i;
    if(sec >= 60) {
        min += parseInt(sec/60);
        sec = parseInt(sec%60);
    };
};
console.log(min);
console.log(sec);