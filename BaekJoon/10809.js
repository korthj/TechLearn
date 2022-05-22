const input = require('fs').readFileSync('./testInput.txt').toString()
const S = input.split('');
const arr = [];
const answer = [];
for(let i=97; i<=122; i++){
    arr.push(String.fromCharCode(i));
   answer.push(-1);
};
for(let i=0; i<S.length; i++){
    for(let j=0; j<arr.length; j++){
        if(S[i] === arr[j]){
            answer[j] = input.indexOf(S[i]);
        };
    };
};

console.log(answer.join(' ').trim());