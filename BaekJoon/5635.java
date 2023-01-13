import java.util.*;
 
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        String arr[][] = new String[N][4];
 
        for (int i = 0; i < N; i++) {
            arr[i][0] = sc.next();
            arr[i][1] = sc.next();
            arr[i][2] = sc.next();
            arr[i][3] = sc.next();
        }
 
        Arrays.sort(arr, new Comparator<String[]>() {
 
            @Override
            public int compare(String[] o1, String[] o2) {
                if (Integer.parseInt(o1[3]) == Integer.parseInt(o2[3])) {
                    if (Integer.parseInt(o1[2]) == Integer.parseInt(o2[2])) {
                        return Integer.compare(Integer.parseInt(o1[1]), Integer.parseInt(o2[1]));
                    } else
                        return Integer.compare(Integer.parseInt(o1[2]), Integer.parseInt(o2[2]));
                }
                return Integer.compare(Integer.parseInt(o1[3]), Integer.parseInt(o2[3]));
            }
        });
 
        System.out.println(arr[N-1][0]+"\n"+arr[0][0]);
 
        sc.close();
    };
};
