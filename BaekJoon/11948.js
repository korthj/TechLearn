const [ A,B,C,D,E,F ] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(Number);
const arr1 = [A, B, C, D].sort((a, b) => b - a).map(Number);
const arr2 = [E, F].sort((a, b) => b - a).map(Number);

arr1.pop();
arr2.pop();

const result = arr1.reduce((acc, cur) => acc + cur) + arr2[0]

console.log(result);