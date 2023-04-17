if __name__ != "__main__":

    from ..gestion.crud import guardar, actualizar, consultar

    def pagarImpuestos():
        print("Pagando impuestos")
        consultar()
        actualizar()
        guardar()

if __name__ == "__main__":
    print("Tarea de mantenimiento")
