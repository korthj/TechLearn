//11557번 Yangjojang of the year 문제
import java.util.*;
public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		for(int i=0;i<num;i++)
		{
			int school = sc.nextInt();
			
				String[] name = new String[school];
				int[] drink = new int[school];
				for(int k=0;k<school;k++)
				{
					name[k] = sc.next();
					drink[k] = sc.nextInt();
				}
				int max = drink[0];
				int idx = 0;
				for(int k=0;k<drink.length;k++)
				{
					if(max<drink[k]) {
						max = drink[k];
						idx = k;
					}
				}
				System.out.println(name[idx]);
			
			
		}

		
	}
}
