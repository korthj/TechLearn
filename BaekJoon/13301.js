const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const range = (start, end) => {
  let array = [];
  for (let i = start; i < end; ++i) {
    array.push(i);
  }
  return array;
};

let answer = [0, 4, 6];
const result = (input) => {
  if (input === 1) return 4;
  if (input === 2) return 6;
  else {
    for (let i of range(3, 81)) {
      answer.push(answer[i - 1] + answer[i - 2]);
    }
    return answer[input];
  }
};

let input = 0;
rl.on("line", (userInput) => {
  input = userInput;
}).on("close", () => {
  console.log(result(input));
  process.exit();
});