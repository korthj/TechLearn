const [N,M,...arr] = require("fs").readFileSync("testInput.txt").toString().trim().split(/\s/);
const S = new Set(arr.slice(0,arr.length-M)); //집합 S는 같은 문자열이 여러번 주어지지 않는다고 명시 
const checkArr = arr.slice(arr.length-M); //그러므로 검사 문자열은 같은 문자열이 여러분 주어질 수 있다는 것.

let result = 0;

checkArr.forEach((v => {
    if (S.has(v)) result++;
  })
);

console.log(result);
