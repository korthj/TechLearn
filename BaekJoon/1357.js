const input = require("fs").readFileSync("testInput.txt").toString().trim();

const reverseStr = (el) => {
    let newString = "";
    for (let i = el.length - 1; i >= 0; i--) {
        newString += el[i];
    }
    return newString;
};

const answer = (line) => {
    const numbers = line.split(" ").map(reverseStr).map(Number);
    const sum = numbers.reduce((acc, cur) => (acc += cur));
    const answer = reverseStr(String(sum));
    console.log(Number(answer));
};

answer(input);