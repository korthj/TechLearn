import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		char[][] map = new char[101][101];
		int horizontal = 0;
		int vertical = 0; 
		
		for(int i=0; i<n; i++) {
			String s = sc.next();
			for(int j=0; j<n; j++) {
				map[i][j] = s.charAt(j);
			}
		}
		
		for(int i=0; i<n; i++) {
			int check_h = 0, check_v = 0;
			for(int j=0; j<n; j++) {
				if(map[i][j] == '.') check_h++;
				if(map[i][j] == 'X' || (j == n-1)) {
					if(check_h >= 2) horizontal++;
					check_h = 0;
				}
				
				if(map[j][i] == '.') check_v++;
				if(map[j][i] == 'X' || (j == n-1)) {
					if(check_v >= 2) vertical++;
					check_v = 0;
				}
			}
		}
		
		System.out.println(horizontal + " " + vertical);
	}
}