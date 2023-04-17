class Producto:
    def __init__(self, nombre, precio) -> None:
        self.nombre = nombre
        self.precio = precio

    def __str__(self) -> str:
        return f"El producto es: {self.nombre} y tiene un precio de {self.precio}"


class Categoria:
    productos = []

    def __init__(self, nombre, productos) -> None:
        self.nombre = nombre
        self.productos = productos

    def agregar(self, producto):
        self.productos.append(producto)

    def imprimir(self):
        for producto in self.productos:
            print(producto)


kayak = Producto("Kayak", 12150)
balon = Producto("Balon", 150)
bicicleta = Producto("Bicicleta", 4500)
raqueta = Producto("Raqueta", 850)

deportes = Categoria("Deportes", [kayak, balon, bicicleta])
deportes.agregar(raqueta)

deportes.imprimir()
