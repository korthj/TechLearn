const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

for(let i=1; i<=input[0]; i++) {
    let [num,...score] = input[i];
    score.sort( (a,b) => b-a);
    let max = score[0];
    let min = score[num-1];
    let gap = [];

    for(let j=0; j<num-1; j++) {
        gap.push(score[j]-score[j+1]);
    };

    gap.sort( (a,b) => b-a);
    console.log(`Class ${i}`);
    console.log(`Max ${max}, Min ${min}, Largest gap ${gap[0]}`);
};