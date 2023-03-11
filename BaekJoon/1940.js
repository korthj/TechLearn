//1940번 주몽 문제, 
const [N, M, input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number).sort((a,b) => a-b));

let result = 0;	
let i = 0;		// 배열 처음(작은) 값이 저장된 인덱스
let j = N-1; 	// 배열 마지막(큰) 값이 저장된 인덱스

// 투 포인터 이동 원칙을 이용해 탐색
while(i < j) {
    if(input[i]+input[j] < M) {
        i++;
    } else if (input[i]+input[j] > M) {
        j--;
    } else { // A[i]+A[j] == M
        result++;
        i++;
        j--;
    };
};

console.log(result);