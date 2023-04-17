miDiccionario = {"Nombre": "Ramiro", "Edad": 36}

print(miDiccionario["Nombre"])

miDiccionario["Profesion"] = "Desarrollador"
miDiccionario["Nacionalidad"] = "Mexicana"
print(miDiccionario)

# if "MesNac" in miDiccionario:
#     print(miDiccionario["MesNac"])
# else:
#     mesNac = int(input("Captura el mes de nacimiento: "))
#     miDiccionario["MesNac"] = mesNac

print(miDiccionario)

print(miDiccionario.get("diaNac", 21))  # no se guarda en el diccionario
print(miDiccionario)

# del (miDiccionario["MesNac"])  # borra
# print(miDiccionario)

for valor in miDiccionario:
    print(miDiccionario[valor])

for valor in miDiccionario.items():
    print(valor)

for llave, valor in miDiccionario.items():
    print(llave, valor)

# Uso mas real

Usuarios = [
    {"id": 1, "Nombre": "Ramiro", "Edad": 36},
    {"id": 2, "Nombre": "Mayra", "Edad": 34},
    {"id": 3, "Nombre": "Diego", "Edad": 6},
]

for usuario in Usuarios:
    print(usuario["Nombre"])
