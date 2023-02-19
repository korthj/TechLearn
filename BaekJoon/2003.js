//2003번 수들의 합2 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [arr,...input] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(v => v.split(" ").map(Number));
const [N,M] = arr;
let result = 0;

for(let i = 0; i<N; i++){
  let sum = 0;
  for(let j = i; j<N; j++){
    //모든 수를 탐색, i값의 증가로 앞에서 부터 하나씩 인덱스를 올려가며 모든 수를 더한다.
    sum+=input[0][j];
    if(sum==M) result++;
  };
};

console.log(result);