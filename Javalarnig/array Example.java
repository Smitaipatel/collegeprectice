import java.util.Scanner;

public class rgh {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Define an array of size 5
        int[] numbers = new int[5];
        
        // Get input from the user
        System.out.println("Enter 5 numbers:");
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = scanner.nextInt();
        }
        
        // Calculate sum and average
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        double average = (double) sum / numbers.length;
        
        // Display results
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        
        scanner.close();
    }
}