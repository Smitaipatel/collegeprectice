/*public class rdj {
  public static void main(String[] args) {
    int i = 0;
    do {
      System.out.println(i);
      i++;
    }
    while (i < 5);  
  }
}*/
//do/while loop


import java.util.Scanner;

public class rdj {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int startValue;
        int endValue;

        System.out.print("Enter the starting value: ");
        startValue = input.nextInt();
        System.out.print("Enter the ending value: ");
        endValue = input.nextInt();

        /*  if (startValue > endValue) {
            System.out.println("Error: Starting value must be less than or equal to the ending value.");
            input.close(); 
            return; 
        }*/

        System.out.println("\nPrinting numbers from " + startValue + " to " + endValue + " (inclusive):");
        int currentValue = startValue;

        do {
            System.out.print(currentValue + " ");
            currentValue++;
        } while (currentValue <= endValue);
        System.out.println(); 



        input.close(); 
    }
}