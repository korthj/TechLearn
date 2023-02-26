//1748번 수 이어 쓰기 1 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const input = +require("fs").readFileSync(filePath).toString().trim();

let result = 0;
let num = 1;
let d = 10
let s = 1;
while(num<=input){
  if(Math.floor(num/d)==0){
    num++;
    result+=s;
  }else{
    d*=10;
    s++;
  };
};

console.log(result);