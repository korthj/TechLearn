let input = require('fs').readFileSync('testInput.txt').toString().trim();
const changeAlpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for(let i of changeAlpha){
    input = input.split(i).join("A");
};
console.log(input.length)
