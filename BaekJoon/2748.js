const num = require("fs").readFileSync("testInput.txt").toString()*1;

const fibonacci = [0, 1];

for (let i = 1; i < num; i++) {
    fibonacci[i+1] = BigInt(fibonacci[i]) + BigInt(fibonacci[i-1]);
};

console.log(fibonacci[num].toString());