const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number))[1];
let result = 0;

for(let i=0;i<input.length;i++){
    if(input[i] > 1){
        let cnt = 0;
        for(let j=2;j<=input[i];j++){
            if(input[i]%j == 0){
                if(input[i] !== j) cnt++;
                else if(cnt === 0) result++;
            };
        };
        cnt = 0;
    }
    };
console.log(result);