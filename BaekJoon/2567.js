//2567번 색종이 - 2 문제
const [n,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const arr = Array.from(new Array(101),() => new Array(101).fill(0));

for(let i=0; i<n; i++) {
    let x = input[i][0];
    let y = input[i][1];;
    
    for(let j=x; j<x+10; j++) {
        for(let k=y; k<y+10; k++){
            arr[j][k] = 1;
        }
    }
}
let cnt = 0;

let dx = [-1,1,0,0];
let dy = [0,0,1,-1];
console.log(arr);
for(let i=1; i<=100; i++) {
    for(let j=1; j<=100; j++) {
        if(arr[i][j] == 1) {
            for(let k=0; k<4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if(nx>=1&&nx<=100&&ny>=1&&ny<=100 && arr[nx][ny] == 0){
                    cnt++;
                }else if(nx<1 || nx>100 || ny<1 || ny>100){
                    cnt++;
                }
            }
        }
    }
}

console.log(cnt);