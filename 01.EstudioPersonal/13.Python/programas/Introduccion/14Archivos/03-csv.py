import csv
import os

# escribir
# with open("14Archivos/archivo.csv", "w") as archivo:
#     writer = csv.writer(archivo)
#     writer.writerow(["ID", "user_ID", "Texto"])
#     writer.writerow(["1", "101", "Usuario uno"])
#     writer.writerow(["2", "102", "Usuario dos"])
#     writer.writerow(["3", "104", "Usuario tres"])

# Leer
# with open("14Archivos/archivo.csv") as archivo:
#     reader = csv.reader(archivo)
#     print(list(reader))
#     archivo.seek(0)
#     for list in reader:
#         print(list)

# Actualizar
with open("14Archivos/archivo.csv") as r, open("14Archivos/archivo_temp.csv", "w") as w:
    reader = csv.reader(r)
    writer = csv.writer(w)
    for linea in reader:
        if linea[0] == "102":
            writer.writerow(["2", "102", "Texto modificado mas"])
        else:
            writer.writerow(linea)


os.remove("14Archivos/archivo.csv")
os.rename("14Archivos/archivo_temp.csv", "14Archivos/archivo.csv")
