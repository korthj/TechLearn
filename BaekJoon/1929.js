const input = [];

const strToNumArr = (str) => str.split(' ').map(Number);

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [M, N] = strToNumArr(input[0]);
    const isPrimeNumber = Array(N + 1).fill(true);
    isPrimeNumber[1] = false;

    for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) {
      if (isPrimeNumber[n]) {
        let m = 2;
        while (n * m <= N) {
          isPrimeNumber[n * m] = false;
          m++;
        }
      }
    }

    const results = [];
    for (let n = M; n <= N; n++) {
      if (isPrimeNumber[n]) {
        results.push(n);
      }
    }
    console.log(results.join('\n'));
  });