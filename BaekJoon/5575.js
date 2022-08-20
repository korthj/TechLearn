const input = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
    let [h, m, s] = [input[i][3], input[i][4], input[i][5]];
    if (s < input[i][2]) {
        s = 60 + s;
        m--;
        s = s - input[i][2];
    } else s = s - input[i][2];
    if (m < input[i][1]) {
        m = 60 + m;
        h--;
        m = m - input[i][1];
    } else m = m - input[i][1];
    h = h - input[i][0];
    console.log(h, m, s);
}