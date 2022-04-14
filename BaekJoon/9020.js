//골드바흐의 추측
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);
input.shift();
const MAX = Math.max(...input);
const answer = [];

//제일 큰 값보다 하나 많은 사이즈의 배열 생성 후 트루로 채워줌
let prime = new Array(MAX + 1).fill(true);

//소수와 아닌수를 구한다.
for (let i=2;i*i<=MAX+1;i++) {
    for (let j=i*i;j<=MAX+1;j+=i) {
        prime[j] = false;
    };
};

input.forEach(v => {
    for (let i=Math.ceil(v/2);i>1;i--) {
        if (prime[i] && prime[v-i]) {
            //소수로만 이루어진 쌍을 찾기위함, 골드바흐의 파티션을 이루는 수를 찾기 위함
            answer.push(`${i} ${v-i}`)
            break;
        };
    };
});

console.log(answer.join('\n'));