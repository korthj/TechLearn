const [ , NList, , MList ] = require("fs").readFileSync("testInput.txt").toString().trim().split('\n');
const setArr = NList.split(' ');
const MLists = MList.split(' ');

const map = new Map();

setArr.forEach((v) => {
    if(map.has(v)){ 
        map.set(v, map.get(v) + 1);
    }else{ 
        map.set(v, 1); 
    };
});

let result = [];

MLists.forEach((v) => {
    if(map.has(v)){ 
        result.push(map.get(v)); 
    }else{ 
        result.push(0);
    };
});

console.log(result.join(' '));
