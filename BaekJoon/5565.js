const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(+line.toString());
}).on("close", function () {
	let price = input[0];
	for (let i = 1; i < input.length; i++) {
		price -= input[i];
	}
	console.log(price);
	process.exit();
});