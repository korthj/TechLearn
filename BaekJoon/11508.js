//11508번 2+1 세일
// const [N, ...input] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(Number);

// function sol(n,arr) {
//     arr.sort((a,b) => b-a);
//     let result = 0;
//     for(let i=0; i<N; i++){
//         //
//         if((i+1) % 3 === 0) continue;
//         result += arr[i];
//     };
//     return result;
// }

// console.log(sol(N,input)); 

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    const [N, ...arr] = input;
    
    function sol(n,arr){
        let result = 0;
        const asd = arr.map(v => Number(v)).sort((a,b) => b-a);
        for(let i=0; i<n; i+=1){
            //
            if((i+1) % 3 === 0) continue;
            result += asd[i];
        };
        return result;
    };
    console.log(sol(N,arr));
    process.exit();
});
