const [T,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
let answer = "";

function eng(a,b) {
    while( b !== 0){
        //b를 나눈 나머지가 0이 될때 까지 반복
        let r = a % b;
        a = b;
        b = r;
    };
    return a;
};

const leastCommonMultiple = (a,b) => (a * b) / eng(a,b);

for(let i=0; i<T;i++){
    let num = input[i].split(" ").map( (a) => +a);
    let a = num[0];
    let b = num[1];
    answer += leastCommonMultiple(a,b)+'\n';
};
console.log(answer);