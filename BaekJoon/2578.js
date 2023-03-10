//2578번 빙고 문제, 5번째 줄까지가 빙고 이후는 사회자가 부르는 번호
const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
const bingo = input.splice(0, 5).map((el) => el.split(" ").map(Number));

let count = 0;


function checkBingo(bingo) {
    let bingoCnt = 0;
    for (let i = 0; i < 5; ++i) {
        let rCount = 0;
        let cCount = 0;
        for (let j = 0; j < 5; ++j) {
            if (bingo[i][j] === -1) cCount++;
            if (bingo[j][i] === -1) rCount++;
        };
        if (rCount === 5) bingoCnt++;
        if (cCount === 5) bingoCnt++;
    };

    let dCount1 = 0,
        dCount2 = 0;
    for (let i = 0; i < 5; i++) {
        if (bingo[i][i] === -1) dCount1++;
        if (bingo[4 - i][i] === -1) dCount2++;
    };

    if (dCount1 === 5) bingoCnt++;
    if (dCount2 === 5) bingoCnt++;

    return bingoCnt >= 3 ? true : false;
};
  
  
for (let i of input) {
  const nums = i.split(" ").map(Number);
  for (let num of nums) {
    //
    for (let i = 0; i < 5; i++) {
        //
        for (let j = 0; j < 5; j++) {
            //
            if (bingo[i][j] === num) {
                bingo[i][j] = -1;
                count++;
            
                if (checkBingo(bingo)) {
                console.log(count);
                return;
            };
            break;
        };
      };
    };
  };
};
