//1302번 베스트셀러 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
let [N,...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let map = new Map();
let answer = input.reduce((acc,cur) => {
    let best = (map.get(cur)||0) +1;
    let max = (map.get(acc)||0);

    map.set(cur,best);

    if(best>max) acc=cur;
    else if(best === max) cur<acc ? acc=cur : acc;
    return acc;
},0);

console.log(answer);