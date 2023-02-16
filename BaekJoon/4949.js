//4949번 균형잡힌 세상
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const open = ["(", "["];
const closed = [")", "]"];
let stack;
const result = [];
input.slice(0, input.length-1).forEach(v => {
    let isTrueFalse = false;
    stack = [];
    
    for (let i=0; i<v.length; i++) {
        if(open.includes(v[i])) stack.push(v[i]);
        else if(closed.includes(v[i])){
            if(stack.pop() !== open[closed.indexOf(v[i])]){
                result.push("no");
                isTrueFalse = true;
                break;
            };
        };
    };
    
    if(!isTrueFalse){
        if (stack.length === 0) result.push("yes");
        else result.push("no");
    };
});
console.log(result.join("\n"));