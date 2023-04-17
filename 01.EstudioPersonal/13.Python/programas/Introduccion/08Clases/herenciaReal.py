class Model():
    tabla = False

    def __init__(self) -> None:
        if not self.tabla:
            print("Error, hay que definir la tabla")

    def guardar(self):
        print(f"Guardando {self.tabla} en base de datos")

    @classmethod
    def buscandoPorId(self, _id):
        print(f"Buscando al usuario {_id} en la tabla {self.tabla}")


class Usuario(Model):
    tabla = "Usuario"


usuario = Usuario()
usuario.guardar()
Usuario.buscandoPorId(19734)
