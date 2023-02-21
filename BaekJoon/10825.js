//10825번 국영수 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");
const result = [];

input.map( v => v.split(" ").map( val => Number(val) || val)).sort((a, b) => {
    const num1 = (100-a[1]) * 10 ** 6 + a[2] * 10 ** 3 + (100-a[3]);
    const num2 = (100-b[1]) * 10 ** 6 + b[2] * 10 ** 3 + (100-b[3]);
    
    if(num1 === num2){
        if(a[0] === b[0]){
            return 1;
        }else if(a[0] < b[0]){
            return -1;
        }else return 0;
    }else return num1-num2;

}).forEach(v => result.push(v[0]));

console.log(result.join("\n"));
