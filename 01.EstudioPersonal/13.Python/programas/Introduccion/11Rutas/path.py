from pathlib import Path

# Path(r"c:\Archivos de programas\mgs")
# Path()

path = Path("pruebaPath/archivo.py")
path.is_file()
path.is_dir()
path.exists()

print(
    path.name,
    path.stem,
    path.suffix,
    path.parent,
    path.absolute()
)

p = path.with_name("Ramiro.py")
print(p)
p = path.with_suffix(".bat")
print(p)
p = path.with_stem("SolArchivo")
print(p)
