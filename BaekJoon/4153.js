const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
input.splice(-1);
let arr = input.map((a) => a.split(" ").map(Number).sort((a,b)=>a-b));

arr.forEach((a) =>
  a[0] * a[0] + a[1] * a[1] == a[2] * a[2]
    ? console.log("right")
    : console.log("wrong")
);