lista = [1, 2, 3, 4]
print(*lista)

lista2 = [5, 6, 7]
listaCombinada = [0, *lista, *lista2, 8]
print(listaCombinada)

# Con esto se concatenan los diccinarios si en algun dic estan repetidas las llaves se toma la de la derecha y reemplaza al de la izquieda como e ve en el ejemplo
dic1 = {"Nombre": "Ramiro", "Edad": 36}
dic2 = {"Profesion": "desarrollo", "Experiencia": 9, "Edad": 34}
dicCombinado = {**dic1, **dic2, "Nacionalidad": "Mexicana"}
print(dicCombinado)
