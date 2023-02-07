const [N,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
input[0].sort((a,b) => a-b);

let answer = 0;
let sum = 0;

for(let i=0; i < N; i++){
    //이전 회차의 값을 더해주기 위해 순서에 유의한다.
    answer += sum+input[0][i];
    sum += input[0][i]    
};
console.log(answer);
