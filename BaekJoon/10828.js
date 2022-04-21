const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const stack = [];
let result = '';
for(let i in input){
    if(input[i].split(' ').length === 1){
        //명령어만 있는 경우
        if(input[i] === 'pop'){
            if(stack.length !== 0){
                result = result + stack.pop() + '\n';
            }else{
                result = result + '-1\n';
            };
        }else if(input[i] === 'size'){
            result = result + String(stack.length) + '\n';
        }else if(input[i] === 'empty'){
            if(stack.length === 0){
                result = result + '1\n';
            }else{
                result = result + '0\n';
            };
        }else if(input[i] === 'top'){
            if(stack.length !== 0){
                result = result + stack[stack.length-1] + '\n';
            }else{
                result = result + '-1\n';
            };
        };
    }else{
        //push는 값이 오기 때문에 배열의 길이가 2이다.
        stack.push(input[i].split(' ')[1]);
    };
};
console.log(result);
