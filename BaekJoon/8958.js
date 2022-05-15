const input = require('fs').readFileSync('./testInput.txt').toString().split('\n');
const N = Number(input[0]);
for(let i=1; i<=N; i++){
  let cnt = 0;  
  let result = 0;
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] === 'O'){
            cnt++;
        }else{
            cnt = 0;
        };
        result += cnt;
    };
    console.log(result);
};