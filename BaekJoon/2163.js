const [N,M] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(Number);

console.log(M*N -1);

//초콜릿을 M 또는 N개 만큼 나눠줘야 하는데 이러기 위해선 각각 N-1, N * (M-1) 횟수 만큼 나눠야한다. 
//하여, N-1+N*(M-1) => N-1 + N*M -N => NM-1과 같다.