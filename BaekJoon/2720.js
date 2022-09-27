const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(+line.toString());
}).on("close", function () {
	input.shift();
	let result = [];
	for (let i = 0; i < input.length; i++) {
		let money = input[i];
		let value = [0, 0, 0, 0];
		value[0] = Math.floor(money / 25);
		money = money % 25;
		value[1] = Math.floor(money / 10);
		money = money % 10;
		value[2] = Math.floor(money / 5);
		money = money % 5;
		value[3] = money;
		result.push(value.join(" "));
	}
	console.log(result.join("\n"));
	process.exit();
});