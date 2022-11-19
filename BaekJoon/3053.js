var r = +require('fs').readFileSync('testInput.txt').toString();
 
const PI = Math.PI
 
console.log((PI * r * r).toFixed(6))
 
console.log((2 * r * r).toFixed(6))