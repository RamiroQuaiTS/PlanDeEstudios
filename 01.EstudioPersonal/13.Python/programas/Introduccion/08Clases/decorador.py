class Auto:
    def __init__(self, marca):
        self.marca = marca

    @property  # este es el get
    def marca(self):
        print("getter")
        return self.__marca

    @marca.setter
    def marca(self, marca):
        print("setter")
        if marca.strip():
            self.__marca = marca


auto = Auto("VW")
print(auto.marca)
