const input = require("fs").readFileSync("testInput.txt").toString();

if(input === "1010"){
    console.log(20);
}else if(input.indexOf("10") !== -1){
    console.log(Number(input.replace("10",""))+10);
}else{
    console.log(Math.floor(Number(input.split("")[0]) + Number(input.split("")[1])));
};