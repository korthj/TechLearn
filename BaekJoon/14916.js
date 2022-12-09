const input = require('fs').readFileSync('testInput.txt').toString().trim();

const solution = (N) => {
    if (N === 1 || N === 3) {
    return -1;
    };
  
    let num = Math.floor(N / 5);
    N = N % 5;

    if (N % 2 === 1) {
    num--;
    N += 5;
    };

    return num + N / 2;
};

console.log(solution(Number(input)));