const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ');
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
console.log(`${(A+B)%C}
${ ((A%C) + (B%C))%C} 
${(A*B)%C}
${((A%C)*(B%C))%C}`);