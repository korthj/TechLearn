const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v=>v.split(" ").map(Number));
const total = Number(input.shift());
let sum = 0;
for(let i=1;i<=input[0];i++){
    sum += input[i][0]*input[i][1];
};
if(total === sum){
    console.log("Yes");
}else{
    console.log("No");
};
