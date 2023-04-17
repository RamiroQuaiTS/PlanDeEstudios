from pathlib import Path
from time import ctime

archivo = Path("14Archivos/prueba.txt")

if archivo.exists():
    print(f"El archivo {archivo.name} si existe")
    print(archivo.stat())
    print(f"El archivo se creó el       : {ctime(archivo.stat().st_ctime)}")
    print(f"El archivo se accedió el    : {ctime(archivo.stat().st_atime)}")
    print(f"El archivo se modificó el   : {ctime(archivo.stat().st_mtime)}")
else:
    print(f"El archivo {archivo.name}  no existe")
