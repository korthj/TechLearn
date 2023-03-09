//9656번 돌게임 문제, 
const N = +require("fs").readFileSync("testInput.txt").toString().trim();
console.log( N%2 === 0 ? "SK" : "CY");