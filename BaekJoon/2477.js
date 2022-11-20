const [K,...arr] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(v => Number(v)));
let hMax = 0, wMax = 0; 
let hMaxIdx = -1, wMaxIdx = -1; 

for(let i = 0; i < 6; i++){
    //
    if(arr[i][0] == 1 || arr[i][0] == 2){ 
        //
        if(hMax < arr[i][1]){ 
            //
            hMax = arr[i][1];
            hMaxIdx = i;
        };
    }else{
        if(wMax < arr[i][1]){
            //
            wMax = arr[i][1];
            wMaxIdx = i;
        };
    };
};
let maxSquare = wMax * hMax; 
let minSquare = arr[(wMaxIdx + 3) % 6][1] * arr[(hMaxIdx + 3) % 6][1]; 

console.log((maxSquare-minSquare)*K);