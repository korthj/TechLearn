//10994번 별 찍기-19 문제,
const input = require("fs").readFileSync("testInput.txt").toString().trim();

let result = [];

for (let i = 0; i < input; i++) {
    result.push("* ".repeat(i) + "*".repeat(4 * (input - i) - 3) + " *".repeat(i));

  if (i !== input - 1)
  result.push(
      "* ".repeat(i + 1) + " ".repeat(4 * (input - i) - 7) + " *".repeat(i + 1)
    );
};

//출력하고 뒤집어 자른 뒤 두번 째꺼 부터 반대로 출력
for (let i of result) console.log(i);
for (let i of result.reverse().slice(1)) console.log(i);

// import java.io.BufferedReader;
// import java.io.InputStreamReader;
// import java.io.BufferedWriter;
// import java.io.OutputStreamWriter;
// import java.io.IOException;

// public class Main{
//   // 1 <= input <= 100
//   // max_length : (2*100-1)*2-1 => 397
//   public static char[][] matrix = new char[397][397];
//   public static int maxLength = 0;

//   public static void recurBox(int x, int y, int step){
//     if (step == 1){
//       matrix[y][x] = '*';
//       return;
//     }
//     /*
//     input : 3
//     step3 : line length : 9
//     step2 : line length : 5
//     step1 : line length : 1
//     generalization : step k, line length is (2*k-1)*2-1 
//     */
//     int length = (2 * step - 1) * 2 - 1;
    
//     for (int i = 0; i < length; i++){
//       // upper, bottom line
//       matrix[y][x+i] = '*';
//       matrix[y+length-1][x+i] = '*';
//     }
//     for (int i = 0; i < length-1; i++){
//       // both side line
//       matrix[y+i][x] = '*';
//       matrix[y+i][x+length-1] = '*';
//     }
    
//     recurBox(x+2, y+2, step - 1);
//   }

//   public static void main(String[] args) throws IOException {
//     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//     BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    
//     int n = Integer.parseInt(br.readLine());
//     maxLength = (2 * n - 1) * 2 - 1;

//     for(int i = 0; i < maxLength ; i++){
//       for(int j = 0; j < maxLength; j++)
//         matrix[i][j] = ' ';
//     }
    
//     recurBox(0, 0, n);

//     for(int i = 0; i < maxLength; i++){
//       for(int j = 0; j < maxLength; j++)
//         bw.write(matrix[i][j]);
//       bw.newLine();
//     }
    
//     br.close();
//     bw.flush();
//     bw.close();
//   }
// }