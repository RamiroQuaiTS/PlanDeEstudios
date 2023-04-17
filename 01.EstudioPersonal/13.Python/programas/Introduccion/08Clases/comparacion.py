class Corrdenadas:
    def __init__(self, lat, lon) -> None:
        self.lat = lat
        self.lon = lon

    # Este metodo magico se ejecuta cuando se compara
    def __eq__(self, otro) -> bool:
        print("incia comparación")
        return self.lat == otro.lat and self.lon == otro.lon

    # valida si una instancia es menor o mayor a otra
    def __lt__(self, otro):
        return self.lat + self.lon > otro.lat + otro.lon

    # valida si una instancia es menor o igual o mayor o igual a otra
    def __le__(self, otro):
        return self.lat + self.lon >= otro.lat + otro.lon


cordUno = Corrdenadas(11, 20)
cordDos = Corrdenadas(15, 20)

print(cordUno == cordDos)
