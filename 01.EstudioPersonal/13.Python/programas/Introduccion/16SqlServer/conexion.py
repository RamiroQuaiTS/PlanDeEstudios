import pyodbc

# Establecer la conexión
server = '<server_name>'
database = '<database_name>'
username = '<username>'
password = '<password>'
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
                      server+';DATABASE='+database+';UID='+username+';PWD='+password)

# Ejecutar una consulta
cursor = cnxn.cursor()
cursor.execute("SELECT @@version;")
row = cursor.fetchone()
print(row[0])
