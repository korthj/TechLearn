const input = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
let result = 1, block = 1;

while (block < input) {    
  block += 6 * result;

  result++;
}

console.log(result);