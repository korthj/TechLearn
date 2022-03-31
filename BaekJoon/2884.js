const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
// const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(" ");

function solution(H, M) {
    //
    let hour = Number(H);
    let minute = Number(M)-45;
    if(0 > minute){
        //45를 뺀 값이 음수이면 시간을 빼고, 이때 시간이 음수가되면 24를 더해준다, 분 또한 음수면 60을 더해준다.
        hour--;
        if(hour < 0)hour += 24;
        minute += 60;
        console.log(hour+" "+minute);
    }else{
        //아니라면 그대로 출력
        console.log(hour+" "+minute);
    };
};

solution(input[0],input[1]);