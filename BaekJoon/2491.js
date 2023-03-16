//2491번 수열 문제,
const [N,input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
let answer = 0;

// 오름차순
let asc=1;
for(let i = 0; i < N; i++) {
    if(input[i] <= input[i + 1]) {
        asc++;
    }else{
        asc=1;
    };
    answer = Math.max(asc, answer);   
};
// 내림차순
let desc=1;
for(let i = 0; i < N; i++) {
    if(input[i] >= input[i + 1]) {
        desc++;    
    }else {
        desc=1;
    };
    answer = Math.max(desc, answer); 
};
console.log(answer);