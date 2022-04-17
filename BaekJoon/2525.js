// const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split('\n');
const nowTime = input[0].split(' ').map(Number);
const A = nowTime[0];
const B = nowTime[1];
const cookingTime = Number(input[1]);
if(B+cookingTime < 60){
    console.log(`${A} ${B+cookingTime}`);
}else{
    const newA = A + Math.floor((B+cookingTime)/60) < 24 ? A + Math.floor((B+cookingTime)/60) : A + Math.floor((B+cookingTime)/60) - 24;
    const newB = (B+cookingTime)%60;
    console.log(`${newA} ${newB}`);
};