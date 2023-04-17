from pathlib import Path

path = Path("09Excepciones")
# path.exists()
# path.mkdir()
# path.rmdir()
# path.rename("PruebaNombre")

# for p in path.iterdir():
#     print(p)

archivos = [p for p in path.glob("*.py")]
print(archivos)
