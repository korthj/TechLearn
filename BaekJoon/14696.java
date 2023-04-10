//14696번 딱지놀이 문제
import java.util.Scanner;

public class Main {

	static int N; 
	
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		N = sc.nextInt();
		
		for ( int i=0; i<N; i++) {
			int A_num = sc.nextInt();
			int [] A_card = new int[5];
			
			for ( int j=0; j<A_num; j++) {
				A_card [ sc.nextInt() ] ++;
			}
			
			int B_num = sc.nextInt();
			int [] B_card = new int[5];
			
			for ( int j=0; j<B_num; j++) {
				B_card [ sc.nextInt() ] ++;
			}
			
			boolean flag = false;
			for ( int j=4; j>0; j--) {
				
				if ( A_card[j] > B_card[j]) {
					System.out.println("A");
					break;
				}
				else if ( A_card[j] < B_card[j]){
					System.out.println("B");
					break;
				}
				
				if ( j==1 && A_card[j]==B_card[j]) flag = true;
				 
			}
			if ( flag) System.out.println("D");
		}
		
	}
}