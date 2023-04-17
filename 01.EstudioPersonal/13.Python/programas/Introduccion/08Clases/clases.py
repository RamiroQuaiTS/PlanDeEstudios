class Perro:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def sonido(self):
        print(f"{self.nombre} hace el sonido de guau")

    def muestraEdad(self):
        print(f"{self.nombre} tiene {self.edad}")


mi_perro = Perro("Bongo", 5)
mi_perro.sonido()
mi_perro.muestraEdad()
