const [a, b, c] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);
const sum = a+b+c;

if(sum !== 180) {
    console.log("Error");
}else{
    if(a === b){
        if(a === c) console.log('Equilateral');
        else console.log('Isosceles');
    }else {
        if(a === c || b === c) console.log('Isosceles');
        else console.log('Scalene');
    };
};