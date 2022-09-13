let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((v) => v.split(" ").map((v) => Number(v)));

let grade = input.map((v) => v.reduce((past, curr) => past + curr, 0));

grade.forEach((v, i) => {
	if (v === Math.max(...grade)) console.log(`${i + 1} ${v}`);
})