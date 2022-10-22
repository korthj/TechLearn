const [n,...words] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");

const result = Array.from(new Set(words)).sort((a,b) => a.length - b.length || a.localeCompare(b));
console.log(result.join("\n"));