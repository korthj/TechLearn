const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	input.shift();
    input = input.map((el) => el.split(" ").map((el) => Number(el)));
    let result = [];

for (let i = 0; i < input.length; i++) {
	let noAd = input[i][0];
	let ad = input[i][1] - input[i][2];
	if (noAd > ad) result.push("do not advertise");
	else if (noAd < ad) result.push("advertise");
	else result.push("does not matter");
}

console.log(result.join("\n"));
	process.exit();
});