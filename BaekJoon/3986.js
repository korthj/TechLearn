//3986번 좋은 단어, 스택의 마지막과 현재 문자가 같다면 스택에서 제거하는 식으로 문자열 패턴을 분석하여 좋은 문자열인지 판단한다.
const [N,...arr] = require("fs").readFileSync("testInput.txt").toString().trim().split(/\s/);
let cnt = 0;
for(let word of arr) {
    const stack = [];
    for(let letter of word) {
        if(stack[stack.length-1] === letter) {
            stack.pop();
        }else{
            stack.push(letter);
        };
    };
    if(stack.length === 0) cnt++;
};
console.log(cnt);