const [S, K, H] = require("fs").readFileSync("testInput.txt").toString().split(" ").map(Number);
let min = S;
if(S+K+H >= 100){
    console.log("OK");
}else if(S+K+H < 100){
    if(K < min) min = K;
    if(H < min) min = H;
    if(min === K){
        console.log("Korea");
    }else if(min === S){
        console.log("Soongsil");
    }else{
        console.log("Hanyang");
    };
}