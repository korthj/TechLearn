const [s] = require("fs").readFileSync("testInput.txt").toString().trim().split(/\s/);

let result = new Set();


for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
        result.add(s.substring(i, j + 1));
    };
};

console.log(result.size);