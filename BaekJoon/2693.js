const [N,...input] = require("fs").readFileSync("testInput.txt", "utf8").toString().trim().split(/\n/).map(v => v.split(" ").map(Number).sort((a,b) => a-b));
let result = [];

for(let i = 0; i < N; i++){
    result.push(input[i][input[i].length - 3]);
};


console.log(result.join("\n"));