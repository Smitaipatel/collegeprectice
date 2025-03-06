class smit:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

x = smit("Smit", "Patel")
x.printname()
# inheritance