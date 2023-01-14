const [n,m] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(v => Number(v));

function getAnwers(num,power) {
    let cnt = 0;
    while( num >= power) {
        cnt += parseInt(num / power);
        num /= power;
    };

    return cnt;
};

const num2 = getAnwers(n,2) - getAnwers(n-m,2)-getAnwers(m,2);
const num5 = getAnwers(n,5) - getAnwers(n-m,5)-getAnwers(m,5);

console.log(Math.min(num2,num5));
