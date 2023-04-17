class Consola:

    def __init__(self, nombreFabricante, nombreConsola):
        self.__nombreFab = nombreFabricante  # variable privada con los __
        self.__nombreCon = nombreConsola

    def prende(self):
        print(f"La consola {self.__nombreCon} está Encendida")

    def getNombreConsola(self):
        return self.__nombreCon

    def setNombreConsola(self, nombre):
        self.__nombreCon = nombre

    @classmethod
    def factory(cls):
        return cls("Sony", "PlayStation 1")


consola = Consola.factory()
consola.prende()
print(consola.getNombreConsola())
consola.setNombreConsola("PS1")
print(consola.getNombreConsola())
