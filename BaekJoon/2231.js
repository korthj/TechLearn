const [input] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(v => Number(v));

let result = 0;

for(let i=0; i<input; i++){
    //
    let sum = 0;
    const num = i;
    const strNum = num.toString();

    for(let j=0; j<strNum.length; j++){
        //
        sum += parseInt(strNum[j]);
    };

    sum += num;
    
    if(sum == input){
        result = num;
        break;
    };
};

console.log(result);