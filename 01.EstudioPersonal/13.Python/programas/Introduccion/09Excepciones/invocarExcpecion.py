class ErrorCajero(Exception):
    "Esta clase es para atrapar un error personalizado"

    def __init__(self, mensaje, codigo) -> None:
        self.mensaje = mensaje
        self.codigo = codigo

    def __str__(self) -> str:
        return f"{self.mensaje} - codigo {self.codigo}"


def division(n):
    if n == 0:
        raise ErrorCajero("Error al dividir entre cero", 405)
    return 5/n


try:
    print(division(0))
except ErrorCajero as e:
    print(e)
