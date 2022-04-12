const nums = [1,2,3,4];

function solution(nums) {
    let answer = 0;
    let arr = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let z=j+1; z<nums.length; z++){
                if(primeNumber(nums[i]+nums[j]+nums[z])){

                console.log(nums[i], nums[j], nums[z]);
                    answer++;
                };
            };
        };
    };   
    return answer;
};

function primeNumber(num){
    for(let i=2; i<num; i++){
        if(num%i === 0){
            return false;
        };
    };
    return true;
}

console.log(solution(nums));

