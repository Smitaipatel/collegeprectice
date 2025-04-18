class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

class Cat(Animal):
    def speak(self):
        print("Cat meows")

# Polymorphism in action
animals = [Dog(), Cat(), Animal()]

for animal in animals:
    animal.speak()  

#Method Overriding