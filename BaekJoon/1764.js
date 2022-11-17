const [N,M,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split(/\s/);
const nList = new Set(input.slice(0,input.length-M));
const mList = new Set(input.slice(input.length-M));

let result = [];

nList.forEach((v) => {
    if(mList.has(v)){
        result.push(v);
    };
});
result.sort();

console.log(result.length);
console.log(result.join("\n"));