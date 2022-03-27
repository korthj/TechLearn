//메모이제이션을 사용하여 해결
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input = require('fs').readFileSync('./testInput.txt').toString().trim().split("\n");

//문자열로 들어온 인풋값을 배열로 변환
const arr = input.map(v=>v.split(' ').map(v=>+v));

let memo = [];

function start(){
    for(let i=0; i <= 101; i++){
        memo[i]=[];
        for(let j=0; j <= 101; j++){
            memo[i][j]=[];
            for(let k=0; k <= 101; k++){
                memo[i][j][k]=0;
            }
        }
    };
    memo[50][50][50] = 1;

    arr.map(e=>{
        // console.log(e)
        if(`${e[0]} ${e[1]} ${e[2]}` == '-1 -1 -1'){
            //종료
            return false;
        };
        const answer = recursive(e[0]+50,e[1]+50,e[2]+50);
        console.log(`w(${e[0]}, ${e[1]}, ${e[2]}) = ${answer}`);  
    })  
};

function recursive(a,b,c){
    console.log(a, b, c)
    if(memo[a][b][c]!=0){
        return memo[a][b][c];
    }else{
        if(a <= 50 || b <= 50 || c <= 50){
            return 1;
        }else if(a > 70 || b > 70 || c > 70){
            return recursive(70, 70, 70);
        }else if(a < b && b < c ){
            memo[a][b][c] = recursive(a, b, c-1)+recursive(a, b-1, c-1)-recursive(a, b-1, c);
        }else{
            memo[a][b][c] = recursive(a-1, b, c)+recursive(a-1, b-1, c)+recursive(a-1, b, c-1)-recursive(a-1, b-1, c-1);
        };
    };
    return memo[a][b][c];
};

start();