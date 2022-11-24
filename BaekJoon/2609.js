const [ㄱ,ㄴ] = require("fs").readFileSync("testInput.txt").toString().trim().split(" ").map(v => parseInt(v));
let ㄷ = ㄱ;
let ㄹ = ㄴ;

while (ㄷ % ㄹ !== 0) {
    let ㅁ = ㄷ % ㄹ;
    if(ㅁ !== 0){
        ㄷ = ㄹ;
        ㄹ = ㅁ;
    };
};
console.log(ㄹ);
console.log(ㄱ*ㄴ/ㄹ);