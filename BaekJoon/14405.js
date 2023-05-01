//14405번 피카츄 문제
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('');


let result = true;
while (input.length > 0 && result) {
  const now = input.shift();
  switch (now) {
    case 'p':
      const i = input.shift();
      if (i != 'i') result = false;
      break;
    case 'k':
      const a = input.shift();
      if (a != 'a') result = false;
      break;
    case 'c':
      const h = input.shift();
      if (h != 'h') result = false;
      const u = input.shift();
      if (u != 'u') result = false;
      break;
    default:
      result = false;
      break;
  };
};

if (result) {
  console.log('YES')
} else {
  console.log('NO')
};