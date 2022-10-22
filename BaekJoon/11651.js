const input = require('fs').readFileSync("testInput.txt").toString().trim().split("\n").map(v=>v.trim()); 
input.shift();
const arr = input.map(v=>v.split(' ').map(x=>+x))
const result = arr.sort((a,b)=>{
  if(a[1]>b[1]){
    return 1;
  }else if(a[1]<b[1]){
    return -1;
  }else{
    return a[0]-b[0]
  }
})
console.log(result.map(v=>v.join(' ')).join('\n'));
