const input = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(Number);
let arr = [0];
let num = 1;
let count = 0;
while (arr.length <= input[1]) {
    arr.push(num); count++;
    if (count === num) {
        num++;
        count = 0;
    };
};
console.log(arr.slice(input[0], input[1] + 1).reduce((past, curr) => past + curr, 0));
