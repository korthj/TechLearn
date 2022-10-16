import java.util.Scanner;


public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String mySound = sc.next();
        String docSound = sc.next();
        if(mySound.indexOf("h")>= docSound.indexOf("h"))
            System.out.println("go");
        else
            System.out.println("no");
    };
};