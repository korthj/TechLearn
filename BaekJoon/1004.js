const input = require("fs").readFileSync("testInput.txt").toString().trim().split(/\s/);
let index = 0;
const result = [];
const T = +input[index++];
for (let i=0; i<T; i++) {
    let count = 0;
    const [x1, y1, x2, y2] = input.slice(index, index+4).map(v => +v);
    index += 4;
    const n = +input[index++];
    for (let j=0; j<n; j++) {
        const [cx, cy, r] = input.slice(index, index+3).map(v => +v);
        index += 3;
        if ((x1-cx)**2 + (y1-cy)**2 < r**2) count++;
        if ((x2-cx)**2 + (y2-cy)**2 < r**2) count++;
        if ((x1-cx)**2 + (y1-cy)**2 < r**2 && (x2-cx)**2 + (y2-cy)**2 < r**2) count -= 2;
    };
    result.push(count);
};
console.log(result.join("\n"));