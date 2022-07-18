const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));

let H = input[0][0];
let M = input[0][1];
let C = input[0][2];

solution(H, M, C);

function solution(H, M, C) {
    C += input[1][0];
    while (C >= 60) {
		M++;
		C -= 60;
	}

	while (M >= 60) {
		H++;
		M -= 60;
	}

	while (H >= 24) {
		H -= 24;
	}

    H %= 24;
    console.log(H, M, C);
}

