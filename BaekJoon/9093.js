const input = require('fs').readFileSync('testInput.txt').toString().split('\n');
const cases = input[0];
let result = '';

for(let i=1; i<= cases; i++){
    let splited = input[i].split(' ');
    for(let j in splited){
        result = result + splited[j].split('').reverse().join('')+' ';
    };
    result += '\n';
};

console.log(result);