def suma(a, b):
    print(a+b)


def sumas(*numeros):
    res = 0
    for num in numeros:
        res += num
    print(res)


suma(5, 9)

sumas(5, 9, 1)
