using Microsoft.AspNetCore.Mvc;
using netCoreSeis.Datos;
using netCoreSeis.Models;

namespace netCoreSeis.Controllers
{
    [ApiController]
    [Route("api/tarjetas")]
    public class TarjetasController : Controller
    {
        #region Constructores

        /// <summary>
        /// Inicializa una nueva instancia de la clase.
        /// </summary>
        /// <param name="servicio">Servicio de aplicación de pagos transacción.</param>
        public TarjetasController()
        {
        }

        #endregion

        [HttpGet]
        public async Task<List<PagoTarjetaCredito>> ObtienePagos(string idPagoMultiple)
        {
            PagosTDC pagos = new();
            return await pagos.MostrarPagos(idPagoMultiple);
        }
    }
}
