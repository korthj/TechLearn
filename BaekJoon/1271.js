const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => BigInt(v));
const [n,m] = input;
let result = ''+n/m + '\n';
result += n%m;
console.log(result);