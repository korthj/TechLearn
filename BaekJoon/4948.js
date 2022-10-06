const input = require('fs').readFileSync("testInput.txt").toString().trim().split("\n").map(v => +v);


const max = Math.max(...input) * 2;

let prime = [];
for (let i = 0; i <= max; i++) {
  prime.push(true);
}
prime[0] = false;
prime[1] = false;


for (let i = 2; i * i <= max; i++) {
  if (prime[i])
    for (let j = i * i; j <= max; j += i)
      prime[j] = false;
}

input.forEach(v => {
  const start = v;
  const end = v * 2;
  if (v > 0) {
    let cnt = 0;
    for (let i = start + 1; i <= end; i++) {
      if (prime[i] == true) {
        cnt++;
      }
    }
    console.log(cnt)
  }
})