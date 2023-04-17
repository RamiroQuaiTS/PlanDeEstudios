# Grupo o conjunto
primero = {1, 1, 2, 2, 3, 4, 5, 5, 8, 8}
print(primero)
primero.add(9)
primero.remove(4)
print(primero)

# Convetir de lista a set
segundoList = [8, 9, 10]
segundo = set(segundoList)
print(segundoList, segundo)

# une todos los sets y elimina los duplicados
print(primero | segundo)
# solo toma los que se repiten en cada set
print(primero & segundo)
# solo toma los que son diferenes del 1er set
print(primero - segundo)
# solo toma los que son diferenes de los 2 sets
print(primero ^ segundo)

# no se puede acceer a los elemntos pero si saber si existe
numBuscarSet = int(input("Número a buscar: "))
if numBuscarSet in primero:
    print(f"si exite el elemento {numBuscarSet}")
else:
    print("No existe ese numero en el set")
