namespace netCoreSeis.Models
{
    public class PagoTarjetaCredito
    {
        public string idTransaccion { get; set; }

        public string numeroTarjeta { get; set; }

        public string numeroCuentaTarjeta { get; set; }

        public int estatus { get; set; }

        public DateTime fechaPagoEvertec { get; set; }

        public string errorEvertec { get; set; }

        public DateTime fechaCore { get; set; }

        public string errorCore { get; set; }

        public decimal montoPago { get; set; }

    }
}
