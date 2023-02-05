const input = require("fs").readFileSync("testInput.txt").toString().trim();

const list = new Array();

for(let i=0;i<input.length-1;i++) {
    //
    for(let j=i+1;j<input.length;j++) {
        let res = '';

        res += reverse(0, i, input);
        res += reverse(i, j, input);
        res += reverse(j, input.length, input);
        
        list.push(res);
    };
};

list.sort();
console.log(list[0]);

function reverse(start, end, str) {
    let s = '';
    
    for(let i=end-1;i>=start;i--) {
        s += str.charAt(i); 
    };

    return s;
};