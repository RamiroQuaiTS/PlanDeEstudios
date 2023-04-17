import sqlite3

with sqlite3.connect("15Sqlite/app.db") as con:
    cursor = con.cursor()
    cursor.execute("SELECT * FROM usuarios")
    # rprint(cursor.fetchall())
    print(cursor.fetchone())
