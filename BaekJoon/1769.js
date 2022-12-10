const input = require('fs').readFileSync('testInput.txt').toString().trim();

function solution(str) {
    let result = 0;

    function recur(str) {
        if(str < 10) return str;
        str = String(str).split('').reduce((acc,cur) => acc+ (+cur),0);
        result++;
        return recur(str); 
    }

    recur(str);

    return [result,recur(str) % 3 === 0 ? 'YES' : 'NO']
};

console.log(solution(input).join('\n'));