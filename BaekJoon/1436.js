const input = +require("fs").readFileSync("testInput.txt").toString();
let num = 666;
let i = 1;

while(i !== input){
    num++;
    if(String(num).includes("666")) i++;
};

console.log(num);