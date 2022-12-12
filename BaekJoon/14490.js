let [num1,num2] = require('fs').readFileSync('testInput.txt').toString().split(':').map(Number);

let func = (num1, num2) => {
    //
    while(num2 > 0){
        //
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    };

    return num1;
};
let num3 = func(num1,num2);

console.log(`${num1/num3}:${num2/num3}`);