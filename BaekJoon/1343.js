const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
const a = input[0]; 

function sol(param) {
    //
    param = param.replace(/XXXX/g,"AAAA");
    param = param.replace(/XX/g,"BB");
    
    return param.split("").includes("X") ? -1 : param;
};

console.log(sol(a));