const [N,...arr] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(Number);

let answer = 0;

while(true){
    let max = 0;

    for(let i=0;i<N;i++){
        //출마자 수 만큼 반복, 제일 많은 득표수를 가진 사람을 찾는다.
        if(arr[i] >= arr[max]) max = i;
    };

    if(max === 0) break;

    //첫번째인 다솜이는 증가, 제일 많은 득표수를 가진 사람들은 값을 하나씩 감소 시킨다.
    arr[0]++;
    arr[max]--;
    answer++;
};

console.log(answer);