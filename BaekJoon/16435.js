const input = require('fs').readFileSync('testInput.txt').toString().split('\n');

let [N, init] = input[0].split(' ').map(n => parseInt(n));
let arr = input[1].split(' ').sort((a,b)=>a-b);

for(let i=0; i<N; i++){
    if(arr[i]<=init){
        init++
    }else{
        break;
    };
};
console.log(init);