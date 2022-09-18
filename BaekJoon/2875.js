let [n,m,k] = require('fs') .readFileSync('testInput.txt').toString().split(' ').map(Number);

let count = 0;
while(true) {
  if (n < 2 || m < 1 || n + m - 3 < k) {
    break;
  }
  n -= 2;
  m -= 1;
  count++;
}

console.log(count);