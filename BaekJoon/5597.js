const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => Number(v));
const arr = [];
for(let i=1;i<31;i++){
    if(!input.includes(i))arr.push(i);
    if(arr.length === 2) break;
}
console.log(arr.join("\n"));