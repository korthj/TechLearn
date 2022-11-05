const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(v => Number(v));

const UR = input[0] * 56;
const TR = input[1] * 24;
const UO = input[2] * 14;
const TO = input[3] * 6;

console.log(UR+TR+UO+TO);