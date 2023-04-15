//6996번 에너그램 문제
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {

    private static boolean solveAnagrams(String first, String second ) {
        if (first.length() != second.length()) return false;
		int alphabet[] = new int[26];
		for (char c : first.toCharArray())
			alphabet[c - 'a']++;
		for (char c : second.toCharArray()) {
			alphabet[c - 'a']--;
			if (alphabet[c - 'a'] < 0) return false;
		}
		return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numTests = sc.nextInt();

        for (int i = 0; i < numTests; i++) {
            String first = sc.next().toLowerCase();
            String second = sc.next().toLowerCase();

            System.out.println(first + " & " + second + " are " + (solveAnagrams(first, second) ? "anagrams." : "NOT anagrams."));
        }
    }
}
