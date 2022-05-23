const input = require('fs').readFileSync('./testInput.txt').toString().split('\n');
const S = Number(input[0]);
for(let i=1; i<=S;i++){
    let result = '';
    const num = Number(input[i].split(' ')[0]);
    const text = input[i].split(' ')[1];

    for(let j=0; j<text.length;j++){
        result += text.split('')[j].repeat(num);
    }
    console.log(result);
}