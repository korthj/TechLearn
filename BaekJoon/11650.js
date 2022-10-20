const input = require('fs').readFileSync("testInput.txt").toString().trim().split("\n").map(v=>v.trim()); 
const N = +input.shift()
const location = input.map(v=>v.split(' ').map(x=>+x))
const answer = location.sort((a,b)=>{
  if(a[0]>b[0]){
    return 1;
  }else if(a[0]<b[0]){
    return -1;
  }else{
    return a[1]-b[1]
  }
})
console.log(answer.map(v=>v.join(' ')).join('\n'))