const input = require("fs").readFileSync("testInput.txt").toString().split("/");
const K = Number(input[0]);
const D = Number(input[1]);
const A = Number(input[2]);
console.log( (K+A<D || D===0) ? "hasu":"gosu");