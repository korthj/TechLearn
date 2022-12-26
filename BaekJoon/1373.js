let input = require('fs').readFileSync("testInput.txt").toString().trim();
let result = '';

while(input.length>3){
    let S = input.slice(input.length-3,input.length);
    result = parseInt(S,2).toString(8)+result;
    input = input.slice(0,input.length-3);
};

console.log(parseInt(input,2).toString(8)+result);