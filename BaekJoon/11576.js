const input = require('fs').readFileSync("testInput.txt").toString().trim().split('\n').map(v=>v.split(' ').map(Number));
const [A,B] = input[0]
const [N] = input[1]
const nums = input[2].reverse();  
const answer = [];
let DEC = 0;

for(let i = 0; i<N; i++){
  DEC+=nums[i]*(A**i)
};

if(DEC==0){
    console.log(0);
}else{
    while(DEC>0){
        answer.unshift(DEC%B);
        DEC = Math.floor(DEC/B)
    };
    console.log(answer.join(' '));
};