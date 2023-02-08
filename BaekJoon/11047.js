//11047번 문제, 동전 0, 중요한 점은 각각의 동전은 무수히 많은 갯수를 사용할 수 있다는 것 이다.
const [input,...values] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map( v => v.split(" ").map(Number));
values.sort((a,b) => b-a);

let N = input[0],
    k = input[1],
    v,
    q,
    result = 0;

for (let i = 0; i < N; i++) {
    v = values[i];

    q = Math.floor(k / v);

    if (q === 0) {
        continue;
    };

    result += q;

    k %= v;

    if (k === 0) {
    break;
    };
};

console.log(result);

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
  
//   });