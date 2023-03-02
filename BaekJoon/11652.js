//11652번 카드 문제, 병합 정렬문제,mergeSort
const [N, ...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v =>BigInt(v));

// 풀이1 문제에서 원하는 방식은 아님.
// let map = new Map();
// let answer = input.reduce((acc,cur) => {
//     let best = (map.get(cur)||0) +1;
//     let max = (map.get(acc)||0);

//     map.set(cur,best);

//     if(best>max) acc=cur;
//     else if(best === max) cur<acc ? acc=cur : acc;
//     return acc;
// },0n);

// console.log(answer.toString());

//정석
function merge(left, right) {
    const sortedArr = [];
    while (left.length && right.length) {
        //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
        if (left[0] <= right[0]) {
        sortedArr.push(left.shift());
        } else {
        sortedArr.push(right.shift());
        };
    };
    //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
    //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
    return [...sortedArr, ...left, ...right];
};

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const boundary = Math.ceil(arr.length / 2);
    //slice로 해주기 때문에 원본 arr은 손상 없다.
    const left = arr.slice(0, boundary);
    const right = arr.slice(boundary);
    //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
    //차근차근 merge(정렬해서 합치기)해주면 된다.
    
    return merge(mergeSort(left), mergeSort(right));
};

const sorted_arr = mergeSort(input.map(v => BigInt(v)));
let maxCount = 0;
let curCount = 0;
let prevNumber = "";
let largest = 2**62;

sorted_arr.forEach(v => {
    if (prevNumber !== v) {
        prevNumber = v;
        curCount = 0;
    };
    curCount++;
    if ((curCount > maxCount) || (curCount === maxCount && largest > v)) {
        maxCount = curCount;
        largest = v;
    };
});
console.log(String(largest));