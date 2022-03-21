function solution(s) {
    let arr = s.split(""); 
    let str = [];

    for (let i = 0; i < arr.length; i++) {
        //
        if (str[str.length - 1] === arr[i]) {
            str.pop();
        }else {
            str.push(arr[i]);
        };
    };
    return str.length === 0 ? 1 : 0;
  };

  console.log(solution("cdcd"));