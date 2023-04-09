//19939번 박 터뜨리기 문제
let [N,K] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(Number);
let result = "";

for(let i = 1; i <K+1; i++){
    //0부터 시작하면 공 한개가 의미없이 소모됨
    N -= i;
    if(K < 0) break;
};

if(N >= 0){
    if(N % K > 0) result += K;
    else result += K-1;
}else {
    result += -1;
};

console.log(result);