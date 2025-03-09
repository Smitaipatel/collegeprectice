import csv
from datetime import datetime

def mark_attendance(name):
    date = datetime.now().strftime('%Y-%m-%d')
    time = datetime.now().strftime('%H:%M:%S')
    
    with open("attendance.csv", "a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([name, date, time])
    
    print(f"Attendance marked for {name} at {time} on {date}")

def view_attendance():
    try:
        with open("attendance.csv", "r") as file:
            reader = csv.reader(file)
            print("\nAttendance Records:")
            for row in reader:
                print(row)
    except FileNotFoundError:
        print("No attendance records found.")

if __name__ == "__main__":
    while True:
        print("\nAttendance System")
        print("1. Mark Attendance")
        print("2. View Attendance")
        print("3. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            name = input("Enter your name: ")
            mark_attendance(name)
        elif choice == "2":
            view_attendance()
        elif choice == "3":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")
