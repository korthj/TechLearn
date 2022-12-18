const input = require('fs').readFileSync("testInput.txt").toString().trim().split("\n")
const [H, W] = input.shift().split(' ').map(Number);
const map = input.map(v => v.trim().split(''));
let cMap = Array.from(Array(H), () => Array(W).fill(0))

for (let i = 0; i < H; i++) {
    //
    let cloud = -1;
    
    for (let j = 0; j < W; j++) {
        //
        if (map[i][j] == 'c') {
            cloud = j;
        };
        cMap[i][j] = cloud == -1 ? -1 : j - cloud;
    };
};

console.log(cMap.map(v => v.join(' ')).join('\n'));