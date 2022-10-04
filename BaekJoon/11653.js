const input = require("fs").readFileSync('dev/stdin').toString().split("\n");

let num = input[0];

for (let i = 2; i <= Math.sqrt(num); i++) {
  while (num % i === 0) {
    console.log(i);
    num /= i;
  }
}
if (num !== 1) console.log(num);