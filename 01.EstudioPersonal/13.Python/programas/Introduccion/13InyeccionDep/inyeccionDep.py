from pathlib import Path

path = Path()
paths = [p for p in path.iterdir() if p.is_dir()]

# for pat in paths:
#     print(pat)

dependencias = {
    "bd": "BD",
    "api": "API",
    "graphql": "GRAPQL"
}


def load(p):
    paquete = __import__(str(p).replace("/", "."))
    try:
        paquete.init(**dependencias)
    except:
        print(f"el paquete {p} no tiene funcion init")


list(map(load, paths))
