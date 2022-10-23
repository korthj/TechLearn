const [n,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
input.sort((a, b) => parseFloat(a) - parseFloat(b));
console.log(input.join("\n"));
