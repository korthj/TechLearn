const [ num, ...input ] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(Number);

const arr = [ 1, 1, 1, 2, 2, 3, 4, 5 ];
const max = Math.max(...input);


for(let i = arr.length; i < max; i++) {
  const push = arr[(i - 1)] + arr[(i - 5)];
  arr.push(push);
};

input.forEach((num) => {
  console.log(arr[(num - 1)]);
});