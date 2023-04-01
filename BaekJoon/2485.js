//2485번 가로수 문제
const [N,...input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);

let arr = [];
let answer = 0;

//나무들 간의 차이를 저장
for(let i = 0; i<input.length-1; i++){
  const dist = input[i+1]-input[i];
  arr.push(dist);
};

function getGCD(num1, num2) {
    return (num2 >0 ? getGCD(num2, num1 % num2) : num1);
};

let num = 0;
//gcd 계산
for(let i = 0; i<arr.length; i++){
    num = getGCD(num,arr[i]);
};

//나무들간의 차이에서 간격당 필요한 나무의 계수를 더해줌
arr.forEach(v=>{
  if(v>num) answer+=(v/num)-1;
});

console.log(answer);