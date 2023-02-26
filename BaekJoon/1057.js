//1057번 토너먼트 문제, 각각의 등수는 (n/2+n%2)로 구할 수 있다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);
let [zi,im] = [...arr];
let result = 0;

while(zi !== im){
    zi = parseInt(zi/2+zi%2);
    im = parseInt(im/2+im%2);
    result++;    
};

console.log(result !== 0 ? result : -1);

