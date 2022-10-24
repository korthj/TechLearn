const [n,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => Number(v));

const numbers = input.sort((a, b) => a - b);

// 산술평균
const a = Math.round(numbers.reduce((a, b) => a + b, 0) / n);
console.log(a.toString());

// 중앙값
const b = numbers[Math.floor(n / 2)];
console.log(b);

// 최빈값
const map = new Map();
let max = 1;
for (let number of numbers) {
  if (map.has(number)) {
    max = Math.max(max, map.get(number) + 1);
    map.set(number, map.get(number) + 1);
  } else map.set(number, 1);
}

const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}

const c = maxArr.length === 1 ? maxArr[0] : maxArr[1];
console.log(c);

// 범위
const d = numbers[n - 1] - numbers[0];
console.log(d);


