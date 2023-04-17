from pathlib import Path
from zipfile import ZipFile

# with ZipFile("14Archivos/comprmidos.zip", "w") as zip:
#     for path in Path().rglob("*.*"):

#         if str(path) != "14Archivos\comprmidos.zip":
#             zip.write(path)

with ZipFile("14Archivos/comprmidos.zip") as zip:
    # print(zip.namelist())

    info = zip.getinfo("14Archivos/05-zip.py")
    print(
        info.file_size,
        info.compress_size
    )

zip.extractall("14Archivos/descomprimir")
