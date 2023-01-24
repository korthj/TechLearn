const input = require("fs").readFileSync("testInput.txt").toString().trim().split(/\n/).map(Number);
let result;
for (let i=0; i<8; i++) {
    //
    if (!!result) break;
    
    for (let j=i+1; j<9; j++) {
        //
        if (input.reduce((sum, item) => sum + item, 0) === input[i] + input[j] + 100) {
            result = input.filter(item => item !== input[i] && item !== input[j]);
            break;
        };
    };
};
console.log(result.sort( (a,b) => a-b).join("\n").toString());