//10211번 Maximum Subarray 문제, 문자 배열을 추출하는데 문제가 있었는지 90%대에서 실패하여 수정
const [T,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");

let result = [];

function maxSubArray(nums) {
    //
    let maxSum = nums[0]; //총 최대값
    let currentSum = 0; //현재 최대값

    for(let i = 0; i < nums.length; i++){ 
        //
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    };
    return maxSum;
};

const main = (i) => {
    let testCase = input[i*2+1].split(" ").map(Number);
  
    result.push(maxSubArray(testCase));
};

for(let i = 0; i < T; i++){
    main(i);
};

console.log(result.join("\n").toString());