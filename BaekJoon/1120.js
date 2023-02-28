//1120번 문자열 문제,
const [A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map( v => v.split(""));
let result = [];

for (let i = 0; i <= B.length - A.length; i++) {
	let diff = A.filter((v, j) => v !== B[j + i]).length;
	result.push(diff);
};

console.log(Math.min(...result));
