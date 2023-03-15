//2776번 암기왕 문제, 정렬과 이분 탐색
const [T,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");

for (let i = 0; i < T; i++) {
  input.shift();
  const N = input.shift().split(' ').map(Number).sort((a, b) => a - b);
  input.shift();
  const M = input.shift().split(' ').map(Number);
  let result = [];

  //기준이 되는 배열과 그 중간 지점을 찾아 비교한다.
  M.forEach(target => {
    let min = 0;
    let max = N.length - 1;
    let mid;
    let success = false;
    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      if (N[mid] == target) {
        //찾았다면 멈춤
        success = true;
        break;
      } else if (N[mid] < target) {
        //아니라면 최대 최소 값을 조정하여 중간 값 다시 찾음
        min = mid + 1;
      } else {
        max = mid - 1;
      };
    };
    const res = success ? 1 : 0;
    result.push(res)
  });

  console.log(result.join('\n'))
};