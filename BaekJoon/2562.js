//전깃줄
const fs = require('fs');
const [n, ...arr] = fs.readFileSync('./testInput.txt').toString().trim().split('\n');
// const [n, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

//전깃줄 입력 값을 정렬 후 A 전봇대의 순서대로 연결된 B전봇대 위치반환(1대1로 연결된 위치)
const powerLine = arr.map(v=>v.split(' ')).sort((a,b)=>{ return a[0]-b[0]}).map(v=>+v[1])

const solution = (data) => {
    const list = [];//전기줄의 연결
    
    //LIS 알고리즘을 이용하여 주어진 arr 배열중 [1,4,6,7,10]을 구하는 것이다.
    for(let i = 0; i<data.length; i++){
      //A,B 배열 길이 만큼 반복
        list[i] = 1;//기본적으로 한개 연결되었다고 가정
        for(let j=0; j<i; j++){
          //두개를 비교하여 이전 전기줄 값이 더 작으면 새 값을 저장하는 이유는 작은 경우 전깃줄이 교차가 안되는 것.
          //즉, 이전 값이 더 크면 겹치는 것으로 간주한다. 
            if(data[j]<data[i]){
              //앞서 정리한 B전봇대의 위치 배열을 앞뒤 순서대로 비교하여 뒤가 더 적으면 리스트에서 두 위치 중 큰 값을 i번째에 저장
              //그러므로 리스트의 처음부터 겹치지 않는 전기줄의 개수를 서로 비교하여 총 개수를 저장한다.    
              //그러면 값이 일정하게 증가하는 부분에서는 최대값에 도달 할 수 있다.          
                list[i] = Math.max(list[i],list[j]+1);
            };
        };
    };
    return Math.max(...list)
};
//전봇대의 길이와 
console.log(powerLine.length-solution(powerLine));