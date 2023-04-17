# las tuplas no se pueden editar

numeros = (1, 2, 3) + (4, 5, 6)
print(numeros)

menosNumeros = numeros[:2]
print(menosNumeros)

primero, segundo, *todos = numeros

print(primero, segundo, todos)

for n in todos:
    print(n)
