const [a,c] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(v => Number(v)));
const bx = c[0] - a[2];
const by = parseInt(c[1] / a[1]);
const bz = c[2] - a[0];
console.log(bx,by,bz);