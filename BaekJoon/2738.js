const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	let number = input
		.shift()
		.split(" ")
		.map((el) => Number(el));
	input = input.map((el) => el.split(" ").map((el) => Number(el)));
	let arr1 = input.splice(0, number[0]);
	let result = arr1.map((el1, idx1) =>
		el1.map((el2, idx2) => el2 + input[idx1][idx2])
	);
	let value = [];
	result.forEach((el) => {
		value.push(el.join(" "));
	});
	console.log(value.join("\n"));
	process.exit();
});

// const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(v => Number(v)));
// const [N,M] = input.shift();
// const arr = Array.from(Array(3), () => new Array(3).fill(0));
// for(let i=0;i<N;i++){
//     for(let j=0;j<M;j++){
//         arr[i][j] = input[i][j]+input[i+N][j];
//     };
// };
// let value =[];
// arr.forEach((el) => {
//     value.push(el.join(" "));
// });
// console.log(value.join("\n"));