const input = require("fs").readFileSync("testInput.txt").toString().split("\n");
const A = parseInt(input.shift());

for(let i = 0 ;i <A; i++){
    const arr= input[i].split(' ')
    const H = parseInt(arr[0]);
    const N = parseInt(arr[2]);
    if(N % H === 0){
       floor = H; 
       ho = N / H;
    }else if(N % H !== 0){
     floor = N % H;
     ho = Math.floor(N / H)+1;
   }
   if(ho < 10){ho = `0${ho}`;}
    console.log(`${floor}${ho}`);
  
 }