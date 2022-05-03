
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ');
let result = '';
for(let i=1;i<=input[0];i++){
    for(let j=1;j<=input[0]-i;j++){
        result += ' ';
    };
    for(let k=1;k<=i;k++){
        result += '*';
    };
    result += '\n';
};
console.log(result);