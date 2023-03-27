//1205번 등수 구하기 문제
// const [np,arr] = require("fs").readFileSync("testInput.txt").toString().trim().split("\n").map(v => v.split(" ").map(BigInt));

// let n = np[0];
// let new_score = np[1];
// let p = np[2];  
// arr.sort((a, b) => (a > b) ? -1 : ((a < b) ? 1 : 0));

// if(n == p && new_score <= arr[arr.length-1])
//     console.log(-1);
// else{
//     let rank = 1;
//     for(let i=0; i<arr.length; i++){
//         if(new_score < arr[i]) rank++;
//         else break;
//     };
//     console.log(rank);
// };
//98%에서 런타임에러
import java.util.*;

public class Main {
    public static void main (String[]args){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int new_score = scanner.nextInt();
        int p = scanner.nextInt();  

        Integer[] arr = new Integer[n];
        for(int i=0; i<n; i++){
            arr[i] = scanner.nextInt();
        }
        Arrays.sort(arr, Collections.reverseOrder());

        if(n == p && new_score <= arr[arr.length-1])
            System.out.print(-1);
        else{
            int rank = 1;
            for(int i=0; i<arr.length; i++){
                if(new_score < arr[i])
                    rank++;
                else
                    break;
            }
            System.out.print(rank);
        }
    }
}