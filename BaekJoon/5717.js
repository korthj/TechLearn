// const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));

// for(let i=0;i<input.length-1;i++){
//     console.log( (input[i][0]+input[i][1]).toString() );
// };
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let result = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	input = input.map((el) => el.split(" ").map((el) => Number(el)));

	for (let i = 0; i < input.length - 1; i++) {
		result.push(input[i][0] + input[i][1]);
	}

	console.log(result.join("\n"));
	process.exit();
});