//3049번 다각형의 대각선 문제
import java.util.*;

public class Main {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        System.out.println((n * (n-1) * (n-2) * (n-3)) / 24);
    }
}