//16968번 차량 번호판 1 문제
const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(v=>v.trim())[0]
const answer = [];
if(input[0]=='d'){
  answer.push(10)
}else{
  answer.push(26)
}

for(let i = 1; i<input.length; i++){
    let temp;
    if(input[i]=='d'){
      temp = 10
    }else{
      temp = 26
    }
    if(input[i]==input[i-1]){
      temp--;
    }
    answer.push(temp)
  }


console.log(answer.reduce((r,v)=>{
  return r*v
},1))