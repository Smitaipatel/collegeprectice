import java.util.Scanner;

public class Fib {
    static void Fibonacci(int N){

        int num1=0, num2=1;
        for(int i=0; i<N; i++){

        System.out.println(num1);


        int num3 = num2+num1;
            num2= num3;
            num1= num2;
        
        }
    }
    public static void main(String[] args){

        //int N=10;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int A = scanner.nextInt();
        
        Fibonacci(12);
    }
}