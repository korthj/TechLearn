let input = +require("fs").readFileSync("testInput.txt").toString().trim();
let answer = 0;

while (input >= 5) {
    answer += parseInt(input / 5);
    input /= 5;
};

console.log(answer);