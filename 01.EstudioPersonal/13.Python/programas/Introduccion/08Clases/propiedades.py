class Consola:
    cables = 1

    def __init__(self, nombreFabricante, nombreConsola):
        self.nombreFab = nombreFabricante
        self.nombreCon = nombreConsola

    def muestraInforamcion(self):
        print(
            f"La consola de la instacia creada es: {self.nombreCon} y fue creada por {self.nombreFab} y tiene en la caja {self.cables} cables")


mi_Consola = Consola("Sony", "PlayStation 5")
mi_Consola.cables = 3
mi_Consola.muestraInforamcion()
