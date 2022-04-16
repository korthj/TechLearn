const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const A = input[0];
const B = input[1];

if(A > 0 && B > 0){
    console.log('1');
}else if(A < 0 && B < 0){
    console.log('3');
}else if(A < 0 && B > 0 ){
    console.log('2')
}else if(A > 0 && B < 0){
    console.log('4')
};

//or 
if(A > 0) B > 0 ? console.log(1) : console.log(4);
if(A < 0) B > 0 ? console.log(2) : console.log(3);
