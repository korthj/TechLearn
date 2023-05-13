//5555번 반지 문제
const [a,n,...input]  = require("fs").readFileSync("testInput.txt").toString().split("\n");

let cnt = 0;
for(let i = 0; i < n; i++) {
    if((input[i]+input[i]).includes(a)){
        cnt++;
    };
};
console.log(cnt);
