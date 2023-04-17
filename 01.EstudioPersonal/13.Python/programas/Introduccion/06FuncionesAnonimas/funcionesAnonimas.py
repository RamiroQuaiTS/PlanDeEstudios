usuarios = [
    ["Ramiro", 1],
    ["Diego", 3],
    ["Mayra", 2],
    ["Bongo", 4]
]

usuarios.sort(key=lambda el: el[1])
print(usuarios)

nombres = [usuario[0] for usuario in usuarios]
print(nombres)

idBusqueda = input("Pasame el id que deseas buscar: ")

primerId = [usuario for usuario in usuarios if usuario[1] == int(idBusqueda)]

print(primerId)

nombres = list(map(lambda usuario: usuario[0], usuarios))

print(nombres)

menosUsuarios = list(filter(lambda usuario: usuario[1] == 2, usuarios))

print(menosUsuarios)
