const input = require("fs").readFileSync("testInput.txt").toString().split("\n");
let iters = +input[0];
let std = input[1];
let result = [];

for(let i=1; i<=iters; i++){
    for(let j=0; j<std.length; j++){
        if(std[j] === input[i][j]){
            result[j] = std[j];
        }else{
            result[j] = "?";
        };
    };
    std = result;
};
console.log(std.join(""));