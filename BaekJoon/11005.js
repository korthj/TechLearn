let [N,B] = require('fs').readFileSync("testInput.txt").toString().trim().split(' ').map(Number);
let result = '';

function notation(x){
    if(x<10) return x;
    return String.fromCharCode(x+55);
};

if(N==0){
  console.log(0);
}else{ 
  while(N>0){
    let str = notation(N%B);
    result = str+result;
    N = Math.floor(N/B)
  };
  console.log(result);
};
