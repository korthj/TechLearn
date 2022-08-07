let input = require("fs").readFileSync("testInput.txt").toString().trim();

while(input.length){
    console.log(input.slice(0,10));
    input = input.slice(10);
}

