class Volador:
    def volar(self):
        print("volando")


class Nadador:
    def nadar(self):
        print("nadando")


class Caminador:
    def camina(self):
        print("caminando")


class Perro(Nadador, Caminador):
    def __init__(self, nombre) -> None:
        super().__init__()
        self.nombre = nombre

    def morder(self):
        print(f"el perro {self.nombre} muerde")


perro = Perro("Bongo")
perro.camina()
perro.nadar()
perro.morder()
