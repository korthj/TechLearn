//15688번 수 정렬하기 5 문제
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int n = Integer.parseInt(br.readLine());
		int nums[] = new int[n];

		for (int i = 0; i < n; i++) {
			nums[i] = Integer.parseInt(br.readLine());
		};

		Arrays.sort(nums);

		for (int i = 0; i < n; i++) {
			sb.append(nums[i]).append("\n");
		};
		
		System.out.println(sb);
	};
};