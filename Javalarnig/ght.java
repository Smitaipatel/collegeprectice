/*public class ght {
  public static void main(String[] args) {
    int i = 0;
    while (i < 5) {
      System.out.println(i);
      i++;
    }  
  }
}*/
//While Loop


import java.util.Scanner;

public class ght {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int startValue;
        int endValue;

        System.out.print("Enter the starting value: ");
        startValue = input.nextInt();

        System.out.print("Enter the ending value: ");
        endValue = input.nextInt();

        if (startValue > endValue) {
            System.out.println("Error: Starting value must be less than or equal to the ending value.");
            input.close(); 
            return; 
        }

        int i = startValue;

        while (i <= endValue) { 
            System.out.println(i);
            i++;
        }

        input.close(); 
    }
}