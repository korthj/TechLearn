const [input, ...appleCoordinate] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

// const screenSize = input[0];
const basketSize = input[1];
// const totalDropApple = appleCoordinate.shift();
appleCoordinate.shift();

let move = 0;
let left = 0;
let right = 0 + (basketSize - 1);

for(let i = 0; i < appleCoordinate.length; i++) {
    //
    let tmp = appleCoordinate[i] - 1;

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