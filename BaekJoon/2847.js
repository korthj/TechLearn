//2847번 게임을 만든 동준이 문제, 
const [N,...input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);
let result = 0;
for(let i = N-1; i > 0; i--){
    if(input[i-1] >= input[i]){ //이전 게임 스코어가 더 높다면
        result += input[i-1]-input[i]+1; //둘을 뺸 뒤 1만큼 차이나야하기 떄문에 1을 더해준다.
        input[i-1] = input[i]-1; //점수가 더 높았던 인덱스는 이후 게임보단 -1하여 저장.
    };
};
console.log(result);