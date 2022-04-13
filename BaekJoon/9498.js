// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split();
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split();
const num = Number(input[0]);

if(90<=num && num<=100){ 
    console.log('A');
}else if(80<=num && num<=89){
    console.log('B');
}else if(70<=num && num<=79){
    console.log('C');
}else if(60<=num && num<=69){
    console.log('D');
}else{
    console.log('F');
};