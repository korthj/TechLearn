const input = require('fs').readFileSync('./testInput.txt').toString().trim().split(' ').map(Number);
const [a, b, c] = [input[0], input[1], input[2]]; 
const answer = (a, b, c) => { 
    if(a === b && a === c && b === c) return console.log(10000+(a*1000)); 
    if(a !== b || a !== c || b !== c) { 
        if(a === b || a === c) return console.log(1000+(a*100)); 
        if(b === c) return console.log(1000+(b*100)); 
    } 
    if(a !== b && a !== c && b !== c) { 
        const sort = [a, b, c].sort(); 
        return console.log(sort.pop() * 100); 
    } 
} 
answer(a, b, c);

