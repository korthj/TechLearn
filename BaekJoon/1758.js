//1758번 알바생 강호 문제, 주려했던 돈 - (등수-1) 단, 음수 제외
const [N,...input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);
let result = 0;

//내림차순 정렬해주지 않으면 오답.
input.sort((a,b) => b-a);

for(let i=0; i<N; i++){
    const num = input[i] - ((i+1)-1);
    if(num > 0) result += parseInt(num);
    else if(num <= 0) break;
};
console.log(result);