const [ N, M ] = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
let result = "NEWBIE!"
if(M > 2){
    if(N >= M){
        result = "OLDBIE!";
    }else{
        result = "TLE!";
    };
};
console.log(result);