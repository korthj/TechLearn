// const input = require('fs').readFileSync('./testInput.txt').toString().split('\n').map(Number);
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let result = input.map(Number);
    
    for(let i=0; i<result.length; i++){
        result[i] = input[i]%42;
    }
    result = [... new Set(result)];
    
    console.log(result.length);
    process.exit();
});

