from abc import ABC, abstractmethod


class Model(ABC):

    @property
    @abstractmethod
    def tabla(self):
        pass

    @abstractmethod
    def guardar(self):
        pass

    @classmethod
    def buscandoPorId(self, _id):
        print(f"Buscando al usuario {_id} en la tabla {self.tabla}")


class Usuario(Model):
    tabla = "Usuario"

    def guardar(self):
        print(f"Guardando usuario en la tabla {self.tabla}")


usuario = Usuario()
usuario.guardar()
Usuario.buscandoPorId(19734)
