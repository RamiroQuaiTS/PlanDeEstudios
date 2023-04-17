class Ave():
    def __init__(self) -> None:
        self.volador = True

    def vuela(self):
        print("Vuela ave")


class Pato(Ave):
    def __init__(self) -> None:
        self.nadador = True
        super().__init__()

    def vuela(self):
        print("Vuela pato")
        super().vuela()


ave = Ave()
ave.vuela()

pato = Pato()
pato.vuela()

print(pato.volador, pato.nadador)
