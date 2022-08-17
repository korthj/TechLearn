const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v=>v.split(" "));

for(let i=1; i<=input.length-1;i++){
    console.log(input[i][0].split("").reverse().join(""));    
};
