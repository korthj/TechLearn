const input = require("fs").readFileSync("testInput.txt").toString();
const n = BigInt(input)%BigInt(20000303);
console.log(n.toString());
