const [A,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");

for(let i = 0 ; i < A ; i++){
    const arr = input[i].split(" ");
    const N = parseInt(arr[0]);
    const M = parseInt(arr[1]);
   console.log(Math.round((factorial(M)/(factorial(M-N)*factorial(N)))));
    
};

function factorial(param){
    if(param<=1) return 1;
    return param * factorial(param-1);
};