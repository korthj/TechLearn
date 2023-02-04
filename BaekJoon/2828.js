const [input, ...appleCoordinate] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

// const screenSize = input[0];
const basketSize = input[1];
// const totalDropApple = appleCoordinate.shift();
appleCoordinate.shift();

let move = 0;
let left = 0;
let right = 0 + (basketSize - 1); //바구니 크기에서 -1을 한 값이 left와 같다면, 바구니 크기는 1칸 짜리임을 의미

for(let i = 0; i < appleCoordinate.length; i++) {
    //현재 사과가 떨어지는 위치에서 -1을 하는 이유는 현재 바구니의 위치 고려.
    let tmp = appleCoordinate[i] - 1;

    //하여 사과의 낙하 위치가 바구니의 범위 안이라면 위치 변동은 없음. 그 외 경우 바구니의 현재 위치만 수정.
    if(tmp > right) {
        move += tmp - right;
        right = tmp;
        left = tmp - (basketSize - 1);
    }else if(tmp < left) {
        move += left - tmp;
        left = tmp;
        right = tmp + (basketSize - 1);
    };
};
console.log(move);