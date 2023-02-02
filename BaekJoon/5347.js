const [N,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

for (let i = 0; i < N; i++) {
    let A = input[i][0];
    let B = input[i][1];
    console.log((A * B / gcm(A, B)));
};

function gcm (a, b) {
    let mod;
    while ((mod = a % b) > 0) {
        a = b;
        b = mod;
        mod = a % b;
    };
    return b;
};