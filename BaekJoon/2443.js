let input = require("fs").readFileSync("testInput.txt").toString();

let star = "*".repeat(2 * Number(input) - 1).split("");
let start = -1; // ++
let end = 2 * Number(input) - 1; // --
let result = star.join('') + '\n';

for (let i = 1; i < Number(input); i++) {
	start++;
	end--;
	star[start] = " ";
	star[end] = "";
	result += star.join('') + '\n';
}

console.log(result.trim());