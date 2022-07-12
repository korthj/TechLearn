const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(Number);
const bugger = [input[0],input[1],input[2]];
const beverage = [input[3],input[4]];
let result = (bugger[0]+beverage[0])-50;

for(let i=0; i<bugger.length; i++){
    for(let j=0; j<beverage.length; j++){
        if(result > (bugger[i]+beverage[j])-50) result = (bugger[i]+beverage[j])-50;
    };
};

console.log(result);