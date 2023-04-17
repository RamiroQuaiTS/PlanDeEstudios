pila = []
pila.append(1)
pila.append(2)
pila.append(3)
print(pila)
ultimoElem = pila.pop()  # Retorna el ulitmo elemento y lo elimina
print(ultimoElem)
print(pila[-1])  # retorna el ultimo elemento

while len(pila) != 0:
    pila.pop()

if not pila:
    print("Pila vacía")
