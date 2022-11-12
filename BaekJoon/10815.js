const [ , NList, , MList ] = require("fs").readFileSync("testInput.txt").toString().trim().split('\n');
const setArr = new Set(NList.split(' '));
const MLists = MList.split(' ');

let result = [];
for(const i of MLists) {
    //has 함수를 사용하여 요소 존재 여부 판단
    setArr.has(i) ? 
    result.push(1) :
    result.push(0);
};

console.log(result.join(' '));