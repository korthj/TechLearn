const input = require('fs').readFileSync('testInput.txt').toString().trim().toLowerCase().split('');
const arr = input.filter((v,i) =>  input.indexOf(v) === i);
let counting = new Array(arr.length).fill(0);
for(let i in input){
    counting[arr.indexOf(input[i])]++;
};
let max = counting[0];
for(let i in counting){
    if(max < counting[i]) max = counting[i];
};
if(counting.filter((v,i) => v === max).length > 1) console.log("?");
else console.log(arr[counting.indexOf(max)].toUpperCase());
