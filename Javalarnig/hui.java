import java.util.Scanner;

public class hui {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = new int[5]; // Array to store 5 numbers
        
        // Getting user input
        System.out.println("Enter 5 numbers:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Number " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
        }
        
        // Calculating sum and average
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        double average = (double) sum / numbers.length;
        
        // Displaying results
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        
        scanner.close();
    }
}
//Array