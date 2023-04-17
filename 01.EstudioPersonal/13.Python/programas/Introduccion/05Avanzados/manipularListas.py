juegos = ["Play", "xbox", "switch", "steam"]

for indice, juego in enumerate(juegos):
    print(indice, juego)

# while True:
#     buscarJuego = input("Captura e juego a buscar: ")
#     if buscarJuego in juegos:
#         print(juegos.index(buscarJuego))
#         break
#     else:
#         print("El juego no se encontró")

juegos.insert(1, "64")
print(juegos)

juegos.append("PS1")
print(juegos)

juegos.remove("PS1")
print(juegos)

juegos.pop()
print(juegos)

juegos.pop(1)
print(juegos)

del juegos[1]
print(juegos)

juegos.clear()
print(juegos)

numeros = [5, 4, 8, 9, 1, 23, 34, 45, 64, 77, 90]
numeros.sort()
print(numeros)
numeros.sort(reverse=True)
print(numeros)
# Esta genera una nueva lista las otras ordena la lista ya creada
numeros2 = sorted(numeros)
numeros2 = sorted(numeros, reverse=True)
print(numeros)
print(numeros2)
