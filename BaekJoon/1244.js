//1244번 스위치 켜고 끄기
const [N, ...arr] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" "));

let switches = arr.shift();
let students = arr.shift();;
let student = arr;


for(let i=0; i<students; i++) {
    let gender = student[i][0];
    let number = student[i][1];
    
    //남학생이면
    if(gender == 1) {
        for(let j=0; j<N; j++) //뽑은 수의 배수 위치에 있는 스위치의 상태를 바꾼다.
            if((j+1) % number == 0)
                switches[j] = switches[j] == 0? 1: 0;
    }
    //여학생이면
    else {
        //뽑은 수를 중심으로 좌우가 대칭이면 상태를 바꾼다.
        switches[number - 1] = switches[number - 1] == 0 ? 1 : 0;
        for(let j=1; j<N/2; j++) {
            if(number - 1 + j >= N || number - 1 - j < 0)
                break;
            if(switches[number - 1 - j] == switches[number - 1 + j]) {
                switches[number - 1 - j] = switches[number - 1 - j] == 0 ? 1 : 0;
                switches[number - 1 + j] = switches[number - 1 + j] == 0 ? 1 : 0;
            }
            else break; //대칭 아닌것이 나오면 바로 끝낸다.
        }
    }
}

//한 줄에 20개씩 출력
for(let i=0; i<N; i += 20) {
    console.log(switches.slice(i, i + 20).join(' '));
}