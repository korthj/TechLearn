//4641번 Doubles 문제
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);

        int input=1;

        while(true){

            ArrayList<Integer> arr=new ArrayList<Integer>();

            input=scan.nextInt();

            if(input==-1){
                break;
            };

            arr.add(input);

            while((input=scan.nextInt())!=0){
                arr.add(input);
            };

            int size=arr.size();

            int sum=0;

            for(int x=0;x<size;x++){
                for(int y=0;y<size;y++){

                    if(x==y)
                        continue;

                    if(arr.get(x)*2==arr.get(y))
                        sum++;
                };
            };
            System.out.println(sum);
        };
        scan.close();
    };
};