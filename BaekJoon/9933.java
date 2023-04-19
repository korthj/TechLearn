//9933번 민균이의 비밀번호
import java.util.*;

public class Main
{
	public static void main(String[] args) 
	{
		Scanner scanner = new Scanner(System.in);
		int N = scanner.nextInt();
		ArrayList<String> list = new ArrayList<String>();
		
		for(int i=0; i<N; i++) {
			String s = scanner.next();
			String rs = new StringBuffer(s).reverse().toString();
			
			if(list.contains(rs) || s.equals(rs)) {
				System.out.println(s.length() + " " + s.charAt(s.length()/2));
				return;
			} else {
				list.add(s);
			}
		}
	}
}