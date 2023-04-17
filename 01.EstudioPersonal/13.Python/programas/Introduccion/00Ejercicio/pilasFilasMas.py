from pprint import pprint


def eliminaEspacio(texto):
    """
    Esta función elimina los espacios de un texto de tipo string
    ParametroEntarda:   string
    ParametroSalida:    regresa el string sin espacios
    """
    return [char for char in texto if char != " "]


def cuentaCaracteres(lista):
    """
    Esta función cuenta los caracteres de una lista
    ParametroEntarda:   lista
    ParametroSalida:    regresa un diccionario con el numero de elementos y su cantidad
    """
    charDict = {}
    for char in lista:
        if char in charDict:
            charDict[char] += 1
        else:
            charDict[char] = 1

    return charDict


def ordena(dicci):
    """
    Esta función ordena el diccionario
    ParametroEntarda:   diccionario
    ParametroSalida:    Diccionario pero ordenado de mayor a menor
    """
    return sorted(
        dicci.items(), key=lambda key: key[1], reverse=True
    )


def maximasTuplas(lista):
    """
    Esta función toma el primer valor que es el maximo y revisa si hay alguna otra con el mismo valor cuando encuentre uno distinto sale de la función
    ParametroEntarda:   Lista
    ParametroSalida:    regresa la lista con los maximos encontrados
    """
    maximo = lista[0][1]
    respuesta = {}
    for orden in lista:
        if maximo > orden[1]:
            break
        respuesta[orden[0]] = orden[1]

    return respuesta


def creaMensaje(diccionario):
    """
    Esta función crea un msj generico con lo encontrado como mayores
    ParametroEntarda:   diccionario
    ParametroSalida:    regresa el msj ya con la infromación correcta.
    """
    mensaje = "Los valores que mas se repiten son \n"
    for key, valor in diccionario.items():
        mensaje += f"- {key} con {valor} repeticiones \n"
    return mensaje


miString = "hola me llamo ramiro y estoy casado con mayra y tenemos un hijo llamado diego"
sinEspacio = eliminaEspacio(miString)
dic = cuentaCaracteres(sinEspacio)
# Se importa librería pprint para poder formatear la impresión y esta se vea con mejor pesentación
pprint(dic, width=1)
ordenaLista = ordena(dic)
print(ordenaLista)
maximosCaracteres = maximasTuplas(ordenaLista)
print(maximosCaracteres)
mensajeMayoresCaracteres = creaMensaje(maximosCaracteres)
print(mensajeMayoresCaracteres)
