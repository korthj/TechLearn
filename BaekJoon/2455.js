let input = require("fs").readFileSync("testInput.txt").toString().split("\n");

let cur = 0;
let answer = 0;

for(let i=0;i<4;i++){
    const [minus, plus] = input[i].split(' ').map(v => +v);
    cur += plus;
    cur -= minus;
    answer = Math.max(answer, cur);
};
console.log(answer);

// let result = [];

// for (let i = 0; i < input.length; i++) {
// 	if (result.length === 0) {
// 		result.push(input[i][1]);
// 	} else {
// 		result.push(result[result.length - 1] - input[i][0] + input[i][1]);
// 	}
// }

// console.log(Math.max(...result));