try:
    n1 = int(input("Ingresa valor: "))
except Exception as e:
    print(f"El dato ingresado no es un valor correcto {e} ")
else:
    print("todo ok")
finally:
    print("Se ejecuta siempre")
