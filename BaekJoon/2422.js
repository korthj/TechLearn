const input = require('fs').readFileSync("testInput.txt").toString().trim().split("\n");
const [N,M] = input[0].split(' ').map(Number);

let badChoice = Array.from(Array(N),()=>Array(N).fill(true));

input.slice(1).map(v=>v.split(' ').map(Number)).forEach(w=>{
  const [x,y] = w ;
  badChoice[x-1][y-1] = false;
  badChoice[y-1][x-1] = false;
});

let result = 0;

for(let i = 0; i<N-2; i++){
  for(let j = i+1; j<N-1; j++){
    if(!badChoice[i][j]) continue;
    for(let k = j+1; k<N; k++){
      if(!badChoice[k][j] ||!badChoice[i][k] ) continue;
      result++;
    };
  };
};
console.log(result)