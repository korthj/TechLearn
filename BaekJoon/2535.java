//2535번 아시아 정보올림피아드
import java.util.*;
 
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        Integer arr[][] = new Integer[101][3];
        
        for(int i=0; i<arr.length; i++) {
            for(int j=0; j<arr[i].length; j++) {
                arr[i][j] = 0; 
            }
        }
        
        int nation[] = new int[101];
 
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < 3; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
 
        sc.close();
 
        Arrays.sort(arr, new Comparator<Integer[]>() {
 
            @Override
            public int compare(Integer[] o1, Integer[] o2) {
                // TODO Auto-generated method stub
                return Integer.compare(o2[2], o1[2]);
            }
 
        });
 
        int res[][] = new int[3][2];
        int cnt = 0;
 
        for (int i = 0; i < N; i++) {
            if (i < 2) {
                res[cnt][0] = arr[i][0];
                res[cnt][1] = arr[i][1];
                cnt++;
                nation[arr[i][0]]++;
            }
            else if (nation[arr[i][0]] >= 2) {
                continue;
            } else {
                res[cnt][0] = arr[i][0];
                res[cnt][1] = arr[i][1];
                break;
            }
 
        }
 
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(res[i][j]+" ");
            }
            System.out.println();
        }
    }
}
