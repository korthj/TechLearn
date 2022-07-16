const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const arr = [];
for(let i of input[1]){
    arr.push( i-(input[0][0]*input[0][1]) );
};
console.log(arr.join(" "));