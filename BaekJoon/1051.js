//1051번 숫자 정사각형, 주어진 숫자에서 꼭짓점의 수가 같은 가장 큰 정사각형을 찾는 문제.
const [NM, ...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
const [N, M] = NM.split(" ").map(v => +v);

let width = Math.min(N, M);

while(width > 1) {
    for(let i = 0; i <= N-width; i++) {
        for(let j = 0; j <= M-width; j++) {
            let num = input[i][j];

            // 꼭짓점 3군데 비교
            if(num==input[i][j+width-1] && num == input[i+width-1][j] && num == input[i+width-1][j+width-1]) {
                console.log(width*width);
                return;
            };
        };
    };
    width--;
};

console.log(width*width);