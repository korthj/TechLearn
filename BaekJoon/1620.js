const input = require("fs").readFileSync("testInput.txt").toString().trim().split(/\s/);
const N = +input[0];
const arr = input.slice(2, N+2);
const pokemonMap = new Map(arr.map((v, i) => [v, i+1]));
const question = input.slice(N+2);
const answer = [];
question.forEach(v => {
    if (Number.isNaN(+v)) answer.push(pokemonMap.get(v));
    else answer.push(arr[+v-1]);
});
console.log(answer.join("\n"));