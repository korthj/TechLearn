// const input = require('fs').readFileSync('testInput.txt').toString(); 
// const a = {
//     'A+': 4.3, "A0": 4.0.toFixed(1), 'A-': 3.7,

//     'B+': 3.3, 'B0': 3.0.toFixed(1), 'B-': 2.7,
    
//     'C+': 2.3, 'C0': 2.0.toFixed(1), 'C-': 1.7,
    
//     'D+': 1.3, 'D0': 1.0.toFixed(1), 'D-': 0.7,
    
//     'F': 0.0.toFixed(1)
// };
// console.log(a[input]);

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on("line", (line) => {
	input = line.toString();
}).on("close", () => {
	let a = {
	"A+": 4.3,
	"A0": 4.0.toFixed(1),
	"A-": 3.7,
	"B+": 3.3,
	"B0": 3.0.toFixed(1),
	"B-": 2.7,
	"C+": 2.3,
	"C0": 2.0.toFixed(1),
	"C-": 1.7,
	"D+": 1.3,
	"D0": 1.0.toFixed(1),
	"D-": 0.7,
    "F" : 0.0.toFixed(1),
};

console.log(a[input]);
	process.exit();
});