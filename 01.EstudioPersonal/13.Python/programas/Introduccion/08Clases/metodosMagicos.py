# https://rszalski.github.io/magicmethods/
class Perro:
    def __init__(self, nombre, edad):
        print("constructor de la instancia")
        self.nombre = nombre
        self.edad = edad

    def __del__(self):
        print("destructor que se ejecuta al eliminar la instancia")

    def __str__(self):
        return f"El perro se llama: {self.nombre}"

    def ruido(self):
        print(f"{self.nombre} dice: Guau!")


perro = Perro("Bongo", 5)
perro.ruido()
print(perro)
texto = str(perro)
print(texto)
del perro
