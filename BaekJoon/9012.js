let [N,...input] = require('fs').readFileSync('testInput.txt').toString().split('\n');

for (let i = 0; i < N; i += 1) {
  const str = input[i];
  const arr =  [];
  let result = 'YES';

  for(let j = 0; j < str.length; j += 1){
    //
    if (str[j] === '(') {
        arr.push(1);
    }else{
      if(!arr.pop()){
        result = 'NO';
        break;
      }; 
    };
  };

  if (arr.length !== 0) {
    result = 'NO';
  };

  console.log(result);
};