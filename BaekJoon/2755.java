//2755번 이번학기 평점은 몇점? 문제
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());    // 과목 수

        double[] score = new double[N]; // 학점을 담을 배열
        double[] grade = new double[N]; // 성적을 담을 배열
        
        // 배열 초기화
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            st.nextToken(); // 과목명은 계산에 필요 없으므로 저장 X
            score[i] = Integer.parseInt(st.nextToken());    // 학점 초기화
            grade[i] = numOfGrade(st.nextToken());          // 성적 초기화
        }

        double sum = 0; // 학점 * 성적의 총합
        double total_score = 0; // 학점의 총합

        for (int i = 0; i < N; i++) {
            sum += score[i] * grade[i];
            total_score += score[i];
        }

        System.out.printf("%.2f", sum / total_score);
    }
    
    // 성적을 double형으로 변환하기 위한 메소드
    public static double numOfGrade(String str) {
        double num = 0.0;
        switch (str) {
            case "A+" : num = 4.3;
                break;
            case "A0" : num = 4.0;
                break;
            case "A-" : num = 3.7;
                break;
            case "B+" : num = 3.3;
                break;
            case "B0" : num = 3.0;
                break;
            case "B-" : num = 2.7;
                break;
            case "C+" : num = 2.3;
                break;
            case "C0" : num = 2.0;
                break;
            case "C-" : num = 1.7;
                break;
            case "D+" : num = 1.3;
                break;
            case "D0" : num = 1.0;
                break;
            case "D-" : num = 0.7;
                break;
            case "F"  : num = 0.0;
                break;
        }

        return num;
    }
}