def get_product(**datos):
    if int(datos["id"]) == 7:
        print("Hola " + datos["nombre"])


# Este tipo de argumento que se manda es como si fuera un objeto el cual en la función se recibe en el parmetro con dobles **
get_product(id="7", nombre="Ramiro", apellido="Tello", edad=36, mesNaci="06")
