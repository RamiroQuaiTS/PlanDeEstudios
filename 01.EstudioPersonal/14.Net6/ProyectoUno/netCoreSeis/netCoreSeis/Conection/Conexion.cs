namespace netCoreSeis.Conection
{
    public class Conexion
    {
        public string conexionString = string.Empty;
        public Conexion()
        {

            var config = new ConfigurationBuilder().SetBasePath
                (Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
            conexionString = config.GetConnectionString("ConexionBDTDC");
        }

        public string cadenaSQL()
        {
            return conexionString;
        }
    }
}
