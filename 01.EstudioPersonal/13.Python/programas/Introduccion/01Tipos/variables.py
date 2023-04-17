carros = "Mustang GT"
# Para iterar toda la palabra toma de la posición 0 a la 7
print(carros[0:7])
# Toma de la posición 8 a la ultima
print(carros[8:])

nombre = "     ramiro"
apellidoP = "tello"
apellidoM = "santoscoy     "
nombreCompleto = f"{nombre} {apellidoP} {apellidoM}"

print(nombreCompleto)
# Las primeras letras de cada palabra las hace mayúsculas
print(nombreCompleto.title())
print(nombreCompleto.upper())
# primera letra en mayusculas pero al ser espacio en blanco no lo hace, ver siguiente función
print(nombreCompleto.capitalize())
# quita espacios y pone la primera letra en mayusculas
print(nombreCompleto.strip().capitalize())
# quita espacios hay lstrip(izquierda) y rstrip(derecha)
print(nombreCompleto.strip())
# busca y regresa un boolean si se encontró
print("ll" in nombreCompleto)
