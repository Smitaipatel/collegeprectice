#include <Servo.h>

// Define motor pins
#define MOTOR_FORWARD 5
#define MOTOR_BACKWARD 6
#define MOTOR_LEFT 9
#define MOTOR_RIGHT 10
#define MOTOR_UP 3
#define MOTOR_DOWN 4

void setup() {
    Serial.begin(9600); // Start serial communication
    pinMode(MOTOR_FORWARD, OUTPUT);
    pinMode(MOTOR_BACKWARD, OUTPUT);
    pinMode(MOTOR_LEFT, OUTPUT);
    pinMode(MOTOR_RIGHT, OUTPUT);
    pinMode(MOTOR_UP, OUTPUT);
    pinMode(MOTOR_DOWN, OUTPUT);
}

void loop() {
    if (Serial.available() > 0) {
        String command = Serial.readStringUntil('\n');
        command.trim();

        if (command == "FORWARD") {
            moveMotor(MOTOR_FORWARD);
        } else if (command == "BACKWARD") {
            moveMotor(MOTOR_BACKWARD);
        } else if (command == "LEFT") {
            moveMotor(MOTOR_LEFT);
        } else if (command == "RIGHT") {
            moveMotor(MOTOR_RIGHT);
        } else if (command == "UP") {
            moveMotor(MOTOR_UP);
        } else if (command == "DOWN") {
            moveMotor(MOTOR_DOWN);
        } else if (command == "STOP") {
            stopAllMotors();
        }
    }
}

void moveMotor(int motorPin) {
    stopAllMotors();  // Stop all before starting movement
    digitalWrite(motorPin, HIGH);
    Serial.println("Moving " + String(motorPin));
}

void stopAllMotors() {
    digitalWrite(MOTOR_FORWARD, LOW);
    digitalWrite(MOTOR_BACKWARD, LOW);
    digitalWrite(MOTOR_LEFT, LOW);
    digitalWrite(MOTOR_RIGHT, LOW);
    digitalWrite(MOTOR_UP, LOW);
    digitalWrite(MOTOR_DOWN, LOW);
    Serial.println("Stopping all motors");
}
