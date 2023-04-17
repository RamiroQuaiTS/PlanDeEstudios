from collections import deque

fila = deque([1, 2, 3])
fila.append(4)
fila.append(5)

print(fila)

fila.popleft()
print(fila)

while len(fila) != 0:
    fila.popleft()

print(fila)

if not fila:
    print("Fila Vacia")
