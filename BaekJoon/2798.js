const input = require('fs').readFileSync('testInput.txt').toString().split("\n")
 
const firstLine = input[0].split(" ")
const secondLine = input[1].split(" ").map(el => parseInt(el))
 
const N = parseInt(firstLine[0])
const M = parseInt(firstLine[1])
 
let result = 0
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    for(let k = 0; k < N; k++) {
      if(i == j || i == k || j == k) {
        continue;
      };
 
      const sum = secondLine[i] + secondLine[j] + secondLine[k]
      if(sum > result && sum <= M) {
        result = sum
      };
 
      if(result == M) {
        break;
      };
    };
  };
};
 
console.log(result)