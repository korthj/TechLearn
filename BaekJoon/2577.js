const input = require('fs').readFileSync('./testInput.txt').toString().split('\n').map(Number);
let sum = String(input[0]*input[1]*input[2]);

// for(let i = 0; i < 10; i++){
//     let cnt = 0;
//     for(let j = 0; j < sum.length; j++){
//         if(Number(sum[j]) === i){
//             cnt++;
//         };
//     };
//     console.log(cnt);
// };

for (let i = 0; i <= 9; i++) { 
    console.log(sum.split(i + '').length - 1);    
};