//9507번 Generations of Tribbles 문제
// const [t,...input] = require("fs").readFileSync("testInput.txt").toString().split("\n");

// const dp = new Array();
// let result = [];
// dp[0] = 1;
// dp[1] = 1;
// dp[2] = 2;
// dp[3] = 4;
// for (let i = 4; i<= 67; i++) {
//     dp[i] = dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4];
// };

// for (let i = 0; i < t; i++) {
//     let n = parseInt(input[i]);
//     result.push(dp[n]);
// };
// console.log(result.join("\n"));

import java.util.*;
import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        long[] dp = new long[68];
        StringBuilder sb = new StringBuilder();
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;
        for (int i = 4; i<= 67; i++) {
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4];
        }
        for (int i = 0; i < t; i++) {
            int n = Integer.parseInt(br.readLine());
            sb.append(dp[n] + "\n");
        }
        System.out.print(sb);
    }
}