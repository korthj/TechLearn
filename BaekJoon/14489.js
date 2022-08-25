const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" "));
const A = Number(input[0][0]);
const B = Number(input[0][1]);
const C = Number(input[1]);

if(A+B >= C*2){
    console.log( (A+B)-(C*2) );
}else{
    console.log(A+B);
};