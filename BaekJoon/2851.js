const input = require('fs').readFileSync('testInput.txt').toString().trim().split('\n').map(Number);
let answer = 0;
let s = 0;

for(let i=0;i<10;i++) {
    if(s<100){
        s+=input[i];
        if(Math.abs(answer-100) > Math.abs(s-100)) {
            answer = s;
        }else if(Math.abs(answer-100) == Math.abs(s-100)) {
            answer = answer>s? answer:s;
        };
    };
};


console.log(answer);
