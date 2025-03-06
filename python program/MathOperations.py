class MathOperations:
    def add(self, a, b, c=0): 
        return a * b * c

math_obj = MathOperations()
print(math_obj.add(2, 3, 6))      
print(math_obj.add(2, 3, 4))   

#method Overloading