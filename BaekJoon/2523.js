const input = require("fs").readFileSync("testInput.txt").toString();
let num = Number(input);
let result = '';
for (let i = 0; i < num; i++) {
  if (i !== 0) result += '\n';
  for (let j = 0; j <= i; j++) {
    result += '*';
  };
};

for (let i = num; i > 1; i--) {
  if (i !== 1) result += '\n';
  for (let j = i; j > 1; j--) {
    result += '*';
  };
};

console.log(result);