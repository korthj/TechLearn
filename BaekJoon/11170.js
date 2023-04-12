//11170번 0의 개수 문제
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const T = input.shift();

for (const string of input) {
  const [N, M] = string.split(' ').map(Number);
  let count = 0;
  for (let i = N; i <= M; i++) {
    const arr = (i + '').split('');
    for (let j = 0; j < arr.length; j++) {
      arr[j] === '0' && count++;
    }
  }
  console.log(count);
}