const [n, ...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(v => Number(v)));

let arr = new Array(100).fill().map((v) => new Array(100).fill(false));

for(let i in input){
    //
    let x = input[i][0];
    let y = input[i][1];

    for(let j=0;j<10;j++){
        //
        for(let k=0;k<10;k++){
            //
            arr[x+j][y+k] = true;
        };
    };  
};

let result = arr.reduce((prev,next) => {
    //
    for(let i of next){
        //
        if(i) prev++;
    };
    return prev;
},0);

console.log(result);