const input = require("fs").readFileSync("testInput.txt").toString().split("\n");
for(let i=1;i<=input[0];i++){
    console.log(`${input[i][0]}${input[i][input[i].length-1]}`);
};