def validaSalida(mensaje):
    return True if mensaje.lower() == "salir" or mensaje == "" else False


print("Bienvenido a el ejercicio de calculadora \nlas operaciones posibles son: suma, resta, multiplicacion y división \nsi desea salir escriba salir en culquera de las opciones")
resultado = ""

while True:
    if resultado == "":
        resultado = input("Captura el primer número: ")
        if validaSalida(resultado):
            break
        resultado = float(resultado)

    operacion = input("Captura la operacion a realizar: ")
    if validaSalida(operacion):
        break
    numeroDosOperacion = input("Captura el siguiente número: ")
    if validaSalida(numeroDosOperacion):
        break

    if operacion == "+":
        resultado += float(numeroDosOperacion)
    elif operacion == "-":
        resultado -= float(numeroDosOperacion)
    elif operacion == "*":
        resultado *= float(numeroDosOperacion)
    elif operacion == "/":
        resultado /= float(numeroDosOperacion)
    else:
        print("No se conoce esa opearación")
        break

    print(resultado)
