def pruebaFuncion(nombre, apellido, edad=18):
    print(f"hola {nombre} {apellido} tu edad es {edad}")


pruebaFuncion("Ramiro", "Tello", 36)
pruebaFuncion("Mayra", "Nava")
pruebaFuncion(edad=36, apellido="Tello", nombre="Ramiro")
