let [n,...input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map((v) => v.split(" "));

let company = new Map(input.map((v) => [v[0], v[1]]));
let result = [];

for (let key of company.keys()) {
	if (company.get(key) !== "leave") result.push(key);
};

console.log(result.sort().reverse().join('\n'));