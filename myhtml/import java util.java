import java.util.Scanner;
import java.util.Random;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int secretNumber = random.nextInt(100) + 1; 
        int attempts = 0;
        boolean hasGuessedCorrectly = false;

        System.out.println("Welcome to the Guessing Game!");
        System.out.println("I've selected a number between 1 and 100. Try to guess it.");

        while (!hasGuessedCorrectly) {
            System.out.print("Enter your guess: ");
            int guess = scanner.nextInt();
            attempts++;

            if (guess == secretNumber) {
                hasGuessedCorrectly = true;
                System.out.println("Congratulations! You've guessed the correct number in " + attempts + " attempts.");
            } else if (guess < secretNumber) {
                System.out.println("The secret number is higher than your guess. Try again.");
            } else {
                System.out.println("The secret number is lower than your guess. Try again.");
            }
        }

        scanner.close();
    }
}
