//달팽이 배열 알고리즘
function createSnailArray(size) {
    const result = [];
    for (let i = 0; i < size; i++) {
      result.push([]);
    }
  
    let startRow = 0;
    let endRow = size - 1;
    let startCol = 0;
    let endCol = size - 1;
    let num = 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Fill the first row
      for (let i = startCol; i <= endCol; i++) {
        result[startRow][i] = num++;
      }
      startRow++;
  
      // Fill the last column
      for (let i = startRow; i <= endRow; i++) {
        result[i][endCol] = num++;
      }
      endCol--;
  
      // Fill the last row
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          result[endRow][i] = num++;
        }
        endRow--;
      }
      
      // Fill the first column
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          result[i][startCol] = num++;
        }
        startCol++;
      }
    }

    return result;
    }
    
    console.log(createSnailArray(5));

//1.빈 2차원 배열을 생성합니다.
//2.달팽이 배열을 채우기 위해 필요한 변수를 초기화합니다. 변수에는 다음과 같은 값이 포함됩니다.
// startRow: 배열의 첫 번째 행 인덱스
// endRow: 배열의 마지막 행 인덱스
// startCol: 배열의 첫 번째 열 인덱스
// endCol: 배열의 마지막 열 인덱스
// num: 배열에 채워넣을 숫자
//3.배열의 첫 번째 행을 채웁니다. 이후 startRow를 1 증가시킵니다.
//4.배열의 마지막 열을 채웁니다. 이후 endCol를 1 감소시킵니다.
//5.배열의 마지막 행을 채웁니다. 이후 endRow를 1 감소시킵니다.
//6.배열의 첫 번째 열을 채웁니다. 이후 startCol을 1 증가시킵니다.
//7.달팽이 배열이 완성될 때까지 3-6 단계를 반복합니다.