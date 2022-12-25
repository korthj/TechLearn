const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
const maxLength = Math.max(...input.map(i => i.length));
let result = "";
for (let i=0; i<maxLength; i++) {
    for (let j=0; j<input.length; j++) {
        result += input[j][i] || "";
    };
};
console.log(result);