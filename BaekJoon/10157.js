//10157번 자리배정 문제,
const [CR, input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));
const C = CR.shift();
const R = CR.shift();

if (input > C * R) {
    console.log(0);
    return;
};

//상하좌우로 값 증감 시키는데 사용
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

let visit = Array.from(new Array(R),()=> new Array(C).fill(false));

let cnt = 0, 
    x = R - 1, 
    y = 0, 
    dir = 0;

while (++cnt != input) {
    //cnt가 대기번호가 되면 종료
    visit[x][y] = true; //문제의 1,1은 실제론 5,0이다.
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx < 0 || ny < 0 || nx >= R || ny >= C || visit[nx][ny]) {
        //
        dir = ++dir % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];
    };

    x = nx;
    y = ny;
};

console.log((y + 1) + " " + (R - x));
