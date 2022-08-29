// const input = require("fs").readFileSync("testInput.txt").toString().split("\n");

// for(let i=1;i<=input.length-1;i++){
//     console.log(i+'.',input[i]);
// };
const readline = require('readline')
 
const input = []
let cnt = 0
 
const rl = readline.createInterface({
    output: process.stdout,
    input: process.stdin
})
 
function solution(input) {
    return input.map((x, i) => { return `${i + 1}. ${x}`}).join('\n')
}
 
rl.on('line', line => {
    if(cnt === 0) {
        cnt = Number(line)
    }
    else {
        input.push(line)
        cnt--
    }
    if(cnt === 0) {
        console.log(solution(input))
        rl.close()
    }
}).on('close', () => {
    process.exit()
})