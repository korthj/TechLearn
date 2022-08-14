const [month, day] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);
if(month>2){
    console.log("After");

}else if(month<2){
    console.log("Before");
}else if(month === 2){
    if(day>18)console.log("After");
    if(day<18)console.log("Before");
    if(day===18)console.log("Special");
}