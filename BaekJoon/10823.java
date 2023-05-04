//10823번 더하기 2 문제
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder statementStr = new StringBuilder();

        // 값 입력
        List<Integer> integerList = new ArrayList<>();
        String str;
        while ((str = br.readLine()) != null) {
            statementStr.append(str);
        }

        // 숫자 parsing
        StringTokenizer st = new StringTokenizer(statementStr.toString(), ",");
        while (st.hasMoreTokens()) {
            integerList.add(Integer.valueOf(st.nextToken()));
        }

        // 합 출력
        System.out.println(integerList.stream().mapToInt(Integer::intValue).sum());
        br.close();
    }

}