//10448번 유레카 이론 문제
const [T, ...input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);

let triNum = [];
for(let i = 1; i < 45; i++) {
    triNum[i] = i * (i + 1) / 2;
}
for(let i = 0; i < T; i++) {
    let n = input[i];
    let result =  eureka(n, triNum);
    console.log(result);
}


function eureka(N, triNum) {
    for(let j = 1; j < 45; j++) {
        for (let k = 1; k < 45; k++) {
            for (let z = 1; z < 45; z++) {
                let sum = triNum[j] + triNum[k] + triNum[z];
                if (sum == N) {
                    return 1;
                }
            }
        }
    }
    return 0;
}