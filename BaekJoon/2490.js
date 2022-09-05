const input = require("fs").readFileSync("testInput.txt").toString().split("\n");
let num = 0;

  for (let i in input) {
    if (input[i] !== "") {
      let arr = input[i].split(" ");
      arr.forEach((i) => {
        if (i === "0") num++;
      });
      switch (true) {
        case num === 0:
          console.log("E");
          break;
        case num === 1:
          console.log("A");
          break;
        case num === 2:
          console.log("B");
          break;
        case num === 3:
          console.log("C");
          break;
        default:
          console.log("D");
          break;
      }
      num = 0;
    }
  }