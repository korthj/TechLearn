const input = require("fs").readFileSync("testInput.txt").toString().trim().split(" ");
let count = 0;
for(let i in input){
    if(input[i] !== '') count++;
}
console.log(count);