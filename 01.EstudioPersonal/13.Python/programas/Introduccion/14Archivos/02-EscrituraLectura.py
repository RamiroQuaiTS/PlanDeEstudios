from pathlib import Path

archivo = Path("14Archivos/prueba.txt")

texto = archivo.read_text("utf-8").split("\n")
texto.insert(0, "Hola mundo")
texto.insert(1, "Este es otro insert")
archivo.write_text("\n".join(texto), "utf-8")

# print(texto)
