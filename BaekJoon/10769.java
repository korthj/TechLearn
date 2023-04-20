//10769번 행복한지 슬픈지 문제
import java.io.IOException;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);

		String str = sc.nextLine();

		int smile = (str.length() - str.replace(":-)", "").length()) / 3;
		int sad = (str.length() - str.replace(":-(", "").length()) / 3;

		String ret = "";
		if (smile == 0 && sad == 0) {
			ret = "none";
		} else if (smile > sad) {
			ret = "happy";
		} else if (sad > smile) {
			ret = "sad";
		} else {
			ret = "unsure";
		}
		System.out.println(ret);
		sc.close();
	}
}