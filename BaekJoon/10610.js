//10610번 30 문제, 3의 배수이며(%3 => 0)/1의 자리수가 0이냐.
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("").map(Number);
const max = input.sort((a, b) => b - a).join('');
console.log(!(input.reduce((acc, cur) => acc + cur, 0) % 3) &&  max[max.length - 1] === '0' ? max : -1);