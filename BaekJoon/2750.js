const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map((v) => Number(v));
let arr = input.slice(1,input.length);
arr.sort((a,b) => a-b);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
};