// //1049번 기타줄 문제, 그리디 알고리즘, 기타줄 개수 N과 브랜드 M 주어짐. 이후부턴 각각 6개 낱개 가격 M개 줄
const [NM,...input] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map( v => Number(v)));

const N = NM[0];
const M = NM[1];
const package = [];
const perprice = [];
let result;

input.map(v => {
    package.push(v[0]);
    perprice.push(v[1]);
});

//저렴한 것 구함.
const pkgMin = package.reduce((acc, v) => acc < v ? acc : v, 1000);
const ppMin = perprice.reduce((acc, v) => acc < v ? acc : v, 1000);

//패키지,개별 단위 구매 개수
const pkgCnt = Math.floor(N/6);
const ppCnt = N-6*pkgCnt;

//패키지의 개당 구매 가격이 개별 구매시 필요한 최저 가격보다 저렴하다면,
if(pkgMin/6 < ppMin) {
    result = pkgCnt*pkgMin + (ppCnt*ppMin < pkgMin ? ppCnt*ppMin : pkgMin);
}else{
    result = N*ppMin;
};

console.log(result);