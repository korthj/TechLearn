//2567번 색종이 - 2 문제, 둘레는 1이 접하고 있는 0의 개수라고 생각하면 됨.
const [n,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const arr = Array.from(new Array(101),() => new Array(101).fill(0));

//입력으로 주어진 모든 직사각형을 차례로 돌면서 해당 영역(10X10)에 해당하는 arr 배열의 값들을 1로 변경.
for(let i=0; i<n; i++) {
    let x = input[i][0];
    let y = input[i][1];;
    
    for(let j=x; j<x+10; j++) {
        for(let k=y; k<y+10; k++){
            arr[j][k] = 1;
        };
    };
};

let result = 0;

//dx와 dy 배열을 만들어 각각 x축과 y축의 이동 방향을 정의
let dx = [-1,1,0,0];
let dy = [0,0,1,-1];

//arr 배열을 순회하면서 1이 있는 경우 상하좌우의 칸을 검사하여, 그중 하나라도 0인 경우 현재 둘레인 것이기 때문에 cnt 변수를 1 증가. 
//만약 검사하는 칸이 배열(도화지)의 범위를 벗어나는 경우(모서리)도 cnt를 증가.
for(let i=1; i<=100; i++) {
    for(let j=1; j<=100; j++) {
        if(arr[i][j] == 1) {
            for(let k=0; k<4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if(nx>=1&&nx<=100&&ny>=1&&ny<=100 && arr[nx][ny] == 0){
                    result++;
                }else if(nx<1 || nx>100 || ny<1 || ny>100){
                    result++;
                };
            };
        };
    };
};

console.log(result);