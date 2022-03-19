//피보나치함수
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input=[8,0,1,2,3,4,5,6,22];//첫번째 값은 테스트 케이스의 개수 T
const T = input.shift();

for (let i = 0; i < T; i++) {
    //배열 맨 앞의 값을 가져와 그 크기 만큼 반복
    //최소값은 0을 넣었을 때 0이 한번 나오기 때문에 디폴트 1로 세팅
    let one = 0, zero = 1;
    
    for (let j = 1; j <= input[i]; j++) {
        //input[i]의 값 만큼 1부터 반복, 피보나치 함수를 다른 방식으로 구현함.
        //피보나치 수열은 주어 진 값에서 -1,-2 만큼 빼면서 0과1이 되는 값을 찾는 다면, 여기선 주어진 값 만큼 반복하며 0과1부터 오름차순으로 구한다.
        //0 이상의 값으로 반복문이 동작하게되면 제대로 된 횟수를 기입하기 위하여 임시 변수를 생성하여 값을 저장
        const temporary = zero;
        zero = one;
        one = temporary + one;
    };
    console.log(zero + " " + one);   
};