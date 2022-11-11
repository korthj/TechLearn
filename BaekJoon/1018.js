const [n, m, ...arr] = require("fs").readFileSync("testInput.txt").toString().trim().split(/\s/);
const lines = ["WBWBWBWB", "BWBWBWBW"]
let min = 64;
for (let i=0; i<=n-8; i++) {
    for (let j=0; j<=m-8; j++) {
        for (let oe=0; oe<2; oe++) {
            let count = 0;
            for (let x=i; x<i+8; x++) {
                for (let y=j; y<j+8; y++) {
                    if (arr[x][y] !== lines[(x+oe)%2][y-j]) {
                        count++;
                    }
                }
            }
            if (min > count) min = count;
        }
    }
}
console.log(min);