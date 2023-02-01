const n = require("fs").readFileSync("testInput.txt").toString().trim();

let max = 0; 
let maxArr = new Array(); 
let prevA,prevB;

for(let i = 1; i <= n; i++) {
    //
    const arr = new Array();   
    arr.push(n);
    arr.push(i);
    prevA = n;
    prevB = i;
    
    while(true){
        //
        let temp = prevA - prevB;
        
        if(temp>=0) {
            arr.push(temp);
        }else{
            break;
        };

        prevA = prevB;
        prevB = temp;
    };

    if(max < arr.length){
        max = arr.length;
        maxArr = arr;
    };
};
console.log(max);                               
console.log(maxArr.toString().replace(/,/gi,' '));
