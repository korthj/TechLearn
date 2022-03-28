const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
// const input = [2,3];
const A = input[0];
const B = input[1];

const solution = (A, B) => {
    //
    return console.log(A*B);
};

solution(A,B);

