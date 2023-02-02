const [N,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

for (let i = 0; i < N; i++) {
    let A = input[i][0];
    let B = input[i][1];
    console.log((A * B / gcd(A, B)));
};

function gcd (a, b) {
    let mod;
    while ((mod = a % b) > 0) {
        a = b;
        b = mod;
        mod = a % b;
    };
    return b;
};

//주어진 두 수 사이의 최소공배수를 구하는 것은 주어진 두 수를 곱한 값을 두 수의 최소 공약수로 나누어 구한다.