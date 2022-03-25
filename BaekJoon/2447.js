const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = [9];

const N = Number(input[0]);
 
const lines = [];
 
stars(N);
console.log(lines.join(''))
 
function stars(N) {
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            recursive(i, j, N)
        };
        lines.push('\n')
    };
};
 
function recursive(i, j, N) {
    if(i % 3 == 1 && j % 3 == 1) {
        //3으로 i와 j를 나눴을때 나머지가 1이면 공백 출력
        lines.push(' ')
    } else {
        if(N == 1) {
            lines.push('*')
        } else {
            //
            recursive(parseInt(i/3), parseInt(j/3), parseInt(N/3))
        };
    };
};
