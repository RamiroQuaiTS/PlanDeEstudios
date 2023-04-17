class Lista(list):
    def preapend(self, item):
        self.insert(0, item)


lista = Lista([1, 2, 3])
lista.append(4)
lista.preapend(0)

print(lista)
