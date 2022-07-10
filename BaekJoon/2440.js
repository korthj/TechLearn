const input = require("fs").readFileSync("testInput.txt").toString();
const num = Number(input);
for(let i=num;i>0;i--){
    console.log("*".repeat(i));
};