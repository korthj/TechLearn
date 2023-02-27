//17219번 비밀번호 찾기 문제, 목록에서 키,값 형태로 빼낸 뒤 새 배열에 매핑해주고 찾아야하는 리스트에서 주소 값을 키로 사용하여 찾는다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [NM, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = NM.split(' ').map(v => +v);
const lists = input.slice(0, N);
const findList = input.slice(-M);
const note = {};
const result = [];

lists.forEach(v => {
  const [ address, pw ] = v.split(' ');
  note[address] = pw;
});
findList.forEach(v => {
    result.push(note[v]);
});

console.log(result.join('\n'));