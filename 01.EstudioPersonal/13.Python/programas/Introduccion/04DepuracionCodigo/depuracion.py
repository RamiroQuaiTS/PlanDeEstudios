# Para depurar hay que darle clic al botón del bug con el play
def largo(texto):
    resultado = 0
    for _ in texto:
        resultado += 1
    return resultado


l = largo("Hola Ramiro")
print(l)
