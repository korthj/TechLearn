let [n, ...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map((el) => el.split(" ").map((el) => Number(el)));
let result = [];

for (let i = 0; i < input.length; i++) {
	let grade = 1;
	for (let j = 0; j < input.length; j++) {
		if (i !== j) {
			if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) grade++;
		};
	};
	result.push(grade);
};

console.log(result.join(" "));