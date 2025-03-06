import pygame
import serial
import time

# Initialize Pygame for joystick control
pygame.init()
pygame.joystick.init()

# Detect joystick
joystick = None
if pygame.joystick.get_count() > 0:
    joystick = pygame.joystick.Joystick(0)
    joystick.init()
    print("Joystick detected!")
else:
    print("No joystick detected. Using keyboard control.")

# Connect to Arduino
SERIAL_PORT = '/dev/ttyUSB0'  # Change this based on your system
BAUD_RATE = 9600
try:
    arduino = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)  # Allow time for connection
    print("Connected to Arduino.")
except Exception as e:
    print(f"Error connecting to Arduino: {e}")
    exit()

# Control mapping
def send_command(command):
    try:
        arduino.write(command.encode())
        print(f"Sent: {command}")
    except Exception as e:
        print(f"Failed to send command: {e}")

# Main loop
running = True
while running:
    pygame.event.pump()
    
    if joystick:
        axis_x = joystick.get_axis(0)  # Left/Right
        axis_y = joystick.get_axis(1)  # Forward/Backward
        axis_z = joystick.get_axis(3)  # Up/Down

        if axis_y < -0.5:
            send_command("FORWARD\n")
        elif axis_y > 0.5:
            send_command("BACKWARD\n")
        elif axis_x < -0.5:
            send_command("LEFT\n")
        elif axis_x > 0.5:
            send_command("RIGHT\n")
        elif axis_z < -0.5:
            send_command("UP\n")
        elif axis_z > 0.5:
            send_command("DOWN\n")
        else:
            send_command("STOP\n")

    keys = pygame.key.get_pressed()
    if keys[pygame.K_w]:
        send_command("FORWARD\n")
    elif keys[pygame.K_s]:
        send_command("BACKWARD\n")
    elif keys[pygame.K_a]:
        send_command("LEFT\n")
    elif keys[pygame.K_d]:
        send_command("RIGHT\n")
    elif keys[pygame.K_UP]:
        send_command("UP\n")
    elif keys[pygame.K_DOWN]:
        send_command("DOWN\n")
    elif keys[pygame.K_ESCAPE]:
        running = False

    time.sleep(0.1)  # Adjust for responsiveness

# Cleanup
pygame.quit()
arduino.close()
print("Program terminated.")
