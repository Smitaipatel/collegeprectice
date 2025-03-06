/*public class zes {
  public static void main(String[] args) {
    for (int i = 0; i <= 10; i = i + 2) {
      System.out.println(i);
    }  
  }
}*/
//for loop


import java.util.Scanner;

public class zes {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int startValue;
        int endValue;

        System.out.print("Enter the starting value: ");
        startValue = input.nextInt();

        System.out.print("Enter the ending value: ");
        endValue = input.nextInt();


        System.out.println("\nPrinting numbers from " + startValue + " to " + endValue );

        for (int i = startValue; i <= endValue; i +=2) {
            System.out.print(i + " ");
        }
        System.out.println(); 

        input.close(); 
    }
}