const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
const result = [];

const main = () => {
    const numbers = result.map((el) => el.split(" ").map(Number));

    let maxValue = 0;
    let maxY = 0;
    let maxX = 0;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (maxValue < numbers[i][j]) {
                maxValue = numbers[i][j];
                maxY = i;
                maxX = j;
            };
        };
    };
    console.log(maxValue);
    console.log(`${maxY + 1} ${maxX + 1}`);
};
let cnt = 9;
for(let i of input){
    if(!cnt){
        cnt = Number(i);
    }else{
        result.push(i);
        if (result.length === cnt) {
            main();
        };
    };
};

