const input = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);

function solution(N, K){
    let count = 0;
    let answer = 0;
    for(let i = 0; i <= N; i ++){
      if(N%i == 0){
        count ++;
        if(count == K){
          answer = i;
          break;
        }
      }
    }
    console.log(answer);
  }
  solution(input[0], input[1]);