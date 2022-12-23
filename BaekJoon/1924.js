const input = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);

let answer = new Date(`2017-${input[0]}-${input[1]}`);

answer.setDate(answer.getDate()+1);

console.log(answer.toString().split(" ")[0].toUpperCase());