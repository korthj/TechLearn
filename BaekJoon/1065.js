// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ');
const N = Number(input[0]);

function solution(N) {
    //한수란, 어떠한 양의 정수가 한개 있을때 그 수의 각 자릿수가 등차수열을 이루는 것이다. 
    //따라서 문제 해결의 핵심은 수를 자릿수 별로 분해하여 등차수열을 이루는지 확인하는 것이다.
    let result = 0;
    for(let i=1; i<=N; i++){
        let num = String(i);
        if(i<100){
            //99까지는 무조건 한수
            result++;
            continue;
        };
        let prev = Number(num[0])-Number(num[1]);
        let next = Number(num[1])-Number(num[2]);
        if(prev === next){ 
            //숫자가 서로 같으면 한수
            result++;
        };
    }
    return result;
}

console.log(solution(N));