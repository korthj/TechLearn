const input = require('fs').readFileSync('./testInput.txt').toString().trim().split('\n').map(Number);

  let max = input[0];
  let maxIdx = 0;
  for (let i = 1; i < 9; i++) {
    if (max < input[i]) {
      max = input[i];
      maxIdx = i;
    }
  }
  console.log(max);
  console.log(maxIdx + 1);