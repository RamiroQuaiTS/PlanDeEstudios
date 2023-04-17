def voltearTexto(texto):
    textoAlReves = ""
    for t in texto:
        textoAlReves = t + textoAlReves
    return textoAlReves


def es_palindromo(texto):
    texto = texto.replace(" ", "")

    # textoNuevo = ""
    # for t in reversed(texto):
    #     textoNuevo += t

    textoNuevo = voltearTexto(texto)

    return texto.upper() == textoNuevo.upper()


print("abba", es_palindromo("abba"))
print("Ramiro", es_palindromo("Ramiro"))
print("amo lA paloma", es_palindromo("amo lA paloma"))
