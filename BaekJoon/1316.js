const input = require("fs").readFileSync("testInput.txt").toString().split("\n");
let result = 0;

for(let i=1; i<=input[0];i++){
    const word = input[i]
    const arr = [];
    let grouping = true;

    for(let j=0;j<word.length;j++){
        if (arr.indexOf(word[j]) === -1) {
          arr.push(word[j]);
          } else {
            if (arr.indexOf(word[j]) !== arr.length - 1) {
              grouping = false;
              break;
            };
        };
    };
    if(grouping) {
      result++; 
    };
};
console.log(result);