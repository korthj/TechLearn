const [ num,A,B] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => new Set(v.split(" ").map(v => Number(v))));

let result = new Set([...A, ...B]);
A.forEach((v) => {
    if(B.has(v)){
        result.delete(v)
    };
  });
console.log(result.size);
