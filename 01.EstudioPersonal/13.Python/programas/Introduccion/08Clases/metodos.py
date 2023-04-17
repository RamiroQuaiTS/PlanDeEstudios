class Auto:
    ruedas = 4

    def __init__(self, marca, anio, color):
        self.marca = marca
        self.anio = anio
        self.color = color

    @classmethod
    def pita(cls):
        print("Piiiiiiiip")

    @classmethod
    def factory(cls):
        return cls("Fiat", 2016, "gris")


auto = Auto("VW", 1992, "Rojo")
auto.pita()
auto2 = Auto.factory()
print(auto2.marca, auto2.color, auto2.anio)
