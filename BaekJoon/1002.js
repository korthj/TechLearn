const input = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
 
const arr = parseInt(input[0]);
 
for(let i = 1; i <= arr; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(el => parseInt(el));
 
  const p1 = {x: x1, y: y1};
  const p2 = {x: x2, y: y2};
 
  // sqet(root)를 취하는 경우 소수점의 오차 때문에 비교가 힘들기 때문에 제곱된 값을 그대로 사용
  const squaredDistance = getSquaredDistance(p1, p2);
  console.log(findPointsCount(squaredDistance, r1, r2));
};
 
function getSquaredDistance(p1, p2) {
    //제곱
  return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2);
};
 
function findPointsCount(dist, r1, r2) {
  const squaredSumR = (r1 + r2) ** 2;
  const squaredDiffR = (r1 - r2) ** 2;
 
  //경우의 수는 5가지
  if(dist == 0){
    // 원점이 같을 때
    if(r1 == r2) return -1; //무제한은 -1
    return 0
  }else{
    if(dist > squaredSumR || dist < squaredDiffR){
      // Case4 : 0개일때
      return 0;
    }else if(dist == squaredDiffR || dist == squaredSumR){
      // case 1,2: 1개일때(내접 또는 외접)
      return 1;
    }else if(dist < squaredSumR){
      // case 3: 2개일떄
      return 2;
    };
  };
};