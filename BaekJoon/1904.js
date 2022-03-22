const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = 5;

//주어진 조건 만큼 길이의 값이 0인 배열 생성
const memo = Array.from({length: input},() => 0);

// N은 1,2,3일때 만들 수 있는 식의 개수는 정해져있다.
memo[1] = 1;
memo[2] = 2;
memo[3] = 3;

//4 이상 부터는 그 값이 유동적으로 변하기 때문에 점화식을 이용하여 계산한다.
for (let i = 4; i <= input; i ++) {
  //15746은 문제에서 제시됨.
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}

console.log(memo[input]);