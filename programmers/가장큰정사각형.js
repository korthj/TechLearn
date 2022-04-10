// 1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)
//다차원 배열의 같은 인덱스(위치)에 얼마나 같은 숫자가 있는지 구하는 것.
const board = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];

function solution(board) {
    let answer = 0;
    const row = board.length;
    const col = board[0].length;
  
    if (row<2 || col<2) return 1;
  
    for (let i=1; i<row; i++) {
      for (let j=1; j<col; j++) {
        if (0<board[i][j]) {
          const minNum = Math.min(
            board[i-1][j-1],
            board[i][j-1],
            board[i-1][j]
          );
          board[i][j] = minNum+1;
          answer = Math.max(answer, board[i][j]);
        };
      };
    };  
    return answer * answer;
};

console.log(solution(board));