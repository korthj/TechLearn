const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// const input = [10,2];

r1.on('line', function(line){
    const input = line.split(' ');
    const A = Number(input[0]);
    const B = Number(input[1]);
    if(A < B){
        console.log('<');
    }else if(A > B){
        console.log('>');
    }else{
        console.log('==');
    };
}).on('close', function(){
    process.exit();
});