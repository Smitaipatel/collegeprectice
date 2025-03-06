entry_value = int(input("Enter the starting value: "))
exit_value = int(input("Enter the exit value: "))

while entry_value != exit_value:
    print(f"Current value: {entry_value}")
    entry_value = int(input("Enter a new value (or exit value to stop): "))

print("Exited the loop.")
#while loop