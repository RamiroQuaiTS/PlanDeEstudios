using netCoreSeis.Conection;
using netCoreSeis.Models;
using System.Data.SqlClient;
using System.Drawing;

namespace netCoreSeis.Datos
{
    public class PagosTDC
    {
        readonly Conexion conexion = new ();
        public async Task<List<PagoTarjetaCredito>> MostrarPagos(string idPagoMultipe)
        {
            var lista = new List<PagoTarjetaCredito>();
            using var sql = new SqlConnection(conexion.conexionString);
            using var cmd = new SqlCommand("pa_s_Registro_Pago_Multiple_Bit", sql);
            await sql.OpenAsync();
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@IdRegistroPagoMultiple", idPagoMultipe);
            using var item = await cmd.ExecuteReaderAsync();
            while (await item.ReadAsync())
            {
                var pagosMultiples = new PagoTarjetaCredito
                {
                    idTransaccion = (string)item["IdTransaccion"],
                    montoPago = (decimal)item["MontoPago"],
                    fechaCore = Convert.ToDateTime(item["FechaTransaccionCommunicator"]),
                    errorCore = (string)item["ErrorCommunicator"],
                    fechaPagoEvertec = Convert.ToDateTime(item["FechaTransaccionEvertec"]),
                    errorEvertec = (string)item["ErrorEvertec"],
                    estatus = (Int16)item["Estatus"],
                    numeroTarjeta = (string)item["NumeroTarjeta"],
                    numeroCuentaTarjeta = (string)item["NumeroCuentaTarjeta"],
                    
                };
                lista.Add(pagosMultiples);
            }
            return lista;   
        }

    }
}
