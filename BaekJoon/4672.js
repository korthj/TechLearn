function findConstructor(num){
    let number = num;
    while(num>0){
        number += num%10;
        num = Math.floor(num/10);
    }
    return number;
};

const arr = new Array(10000);
arr.fill(true);

for(let i=1; i<=10000; i++){
    arr[findConstructor(i)] = false;
    if(arr[i]){
        console.log(i);
    };
};