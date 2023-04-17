import sqlite3

with sqlite3.connect("15Sqlite/app.db") as con:

    con.execute(
        """
            CREATE TABLE if not exists usuarios
                        (id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nombre TEXT,
                        correo TEXT)
            """)

    usuarios = [
        ("Ramiro", "ramiro@example.com"),
        ("Mayra", "mayra@example.com"),
        ("Diego", "diego@example.com"),
    ]

    # con.execute("INSERT INTO usuarios (nombre, correo) VALUES (?, ?)",
    #             ("Juan", "juan@example.com"))
    # con.execute("INSERT INTO usuarios (nombre, correo) VALUES (?, ?)",
    #             ("María", "maria@example.com"))
    # con.execute("INSERT INTO usuarios (nombre, correo) VALUES (?, ?)",
    #             ("Pedro", "pedro@example.com"))

    con.executemany("INSERT INTO usuarios (nombre, correo) VALUES (?, ?)",
                    usuarios)
