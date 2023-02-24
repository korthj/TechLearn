//9613번 GCD(최대 공약수) 합 문제, 유클리드 호제법 풀이 -> ex)GCD(24, 16) = GCD(16, 8) = GCD(8, 0)
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [t,...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(v => v.split(" ").map(Number));

const answer = [];

arr.forEach(v=>{
  const N = v[0];
  const nums = v.splice(1);
  let sum = 0;
  for(let i =0; i<nums.length-1; i++){
    for(let j = i+1; j<nums.length; j++){
      sum+=getGCD(nums[i],nums[j]);
    };
  };
  answer.push(sum);
});

console.log(answer.join('\n'));

function getGCD(num1, num2){
    return (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
};