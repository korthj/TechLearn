const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
   input.push(line);

}).on("close", function () {
    for(i of input){
        list.push(i.split(" ").map((el) => parseInt(el)));
    };

    list = list.slice(0,-1);
    answer(list);
    process.exit();
});

function answer(list) {
    let L = 0; 
    let P = 0; 
    let V = 0; 
    let cnt = 0; 

    for(let i=0; i<list.length; i++){
        cnt = 0;
        L = list[i][0];
        P = list[i][1];
        V = list[i][2];

        while(V > P){
            V -= P; 
            cnt += L; 
        };

        if(L > V){
            cnt += V;
        }else{
            cnt += L;
        };
        console.log("Case "+(i+1) +": "+cnt);
    };
   
};