//1543번 문서 검색 문제, 찾아야하는 단어 만큼 자르는게 아닌, 한번 찾으면 그 만큼 이후부터 인덱스를 시작하여 새로 검색 시작
const [words, searchWord] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n");
let i = 0;
let cnt = 0;
while(i < words.length) {
    const j = words.slice(i).search(searchWord);
    if(j >= 0){
        i += j+searchWord.length; 
        cnt++;
    }else break;
};
console.log(cnt);
