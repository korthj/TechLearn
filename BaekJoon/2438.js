//별찍기
const input = require('fs').readFileSync('./testInput.txt').toString().split(' ');
for(let i=1;i<=input[0];i++){
    let result = '';
    for(let j=1;j<=i;j++){
        result += '*';
    };
    console.log(result);
};