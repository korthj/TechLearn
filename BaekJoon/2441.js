const input = require("fs").readFileSync("testInput.txt").toString();
const star = new Array(Number(input)).fill('*');
console.log(star.join(""));
for(let i=0;i<star.length-1;i++){
    star[i]=" ";
    console.log(star.join(""));
};