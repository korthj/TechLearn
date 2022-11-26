const [N,...arr] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map( v => v.split(" ").map( v => parseInt(v)));
const f = arr[0].shift();

//for문 사용시 런타임에러 발생
arr[0].forEach(v => {
    const val = greatestCommonDivisor(f,v);
    console.log(f/val+'/'+v/val);
});

function  greatestCommonDivisor(a, b) {
    let x;
    let y;
    if (a > b) {
      x = a; y = b;
    } else {
      x = b; y = a;
    }
    let r;
    while (y != 0) {
      r = x % y;
      x = y;
      y = r;
    }
    return x;
};