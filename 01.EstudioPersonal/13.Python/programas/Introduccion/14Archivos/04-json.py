import json
from pathlib import Path

# Escribir
# consolasSony = [
#     {"id": 1, "nombre": "PlayStation1"},
#     {"id": 2, "nombre": "PlayStation2"},
#     {"id": 3, "nombre": "PlayStation3"},
#     {"id": 4, "nombre": "PlayStation4"},
#     {"id": 5, "nombre": "PlayStation5"},
# ]

# data = json.dumps(consolasSony)
# Path("14Archivos/consolasSony.json").write_text(data)

# leer json
data = Path("14Archivos/consolasSony.json").read_text(encoding="utf-8")
productos = json.loads(data)
print(productos)

# modificar
productos[0]["Nombre"] = "Play Station 1"
Path("14Archivos/consolasSony.json").write_text(json.dumps(productos))
print(productos)
