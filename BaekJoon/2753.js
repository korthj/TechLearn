// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split();
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split();

function solution(data){
    if(data%4 === 0 && (data%100 !== 0 || data%400 === 0)){
        return 1;
    }else{
        return 0;
    }
}

console.log(solution(Number(input[0])));