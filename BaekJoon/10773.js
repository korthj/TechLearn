//10773번 제로, 해당 문제는 0이 주어지면 가장 최근에 불린 수를 없애는 방식이라 FILO 형태의 스택 구조 임을 알 수 있다.
//이에 유의하여 0이 나올 시 스택의 가장 윗 부분 수를 제거하여 주면 된다.
const [ N,...input ] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(Number);

const stack = [];
let result = 0;

for(let i = 0; i <N; i++) {
    //
    if(input[i] !== 0){
        stack.push(input[i]);      
        result += input[i];
    }else{
        result -= stack.pop();
    };
};

console.log(result);