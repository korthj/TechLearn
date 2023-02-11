//10845번 큐 문제, 스위치문을 사용하여 풀었고 결과는 다른 이들에 비해 속도는 25% 정도 빠르지만 메모리를 10% 정도 더 사용한다.
let [ N,...input ] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" "));

const queue = [];
let result = '';
for(let i = 0; i < N; i++) {
    //
    switch(input[i][0]){
        case "push":
            queue.push(input[i][1]);
            break;
        case "pop":
            result += (queue.length === 0 ? "-1" : queue.shift()) + "\n";
            break;
        case "size":
            result += (queue.length) + "\n";
            break;
        case "empty":
            result += (queue.length === 0 ? "1" : "0") + "\n";
            break;
        case "front":
            result += (queue.length === 0 ? "-1" : queue[0]) + "\n"; 
            break;
        case "back":
            result += (queue.length === 0 ? "-1" : queue[queue.length - 1]) + "\n";
            break;
    };    
};
console.log(result);