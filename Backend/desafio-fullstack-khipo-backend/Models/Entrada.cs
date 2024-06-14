using System.ComponentModel.DataAnnotations;

namespace desafio_fullstack_khipo_backend.Models
{
    public class Entrada
    {
        public int Id { get; set; }
        public string NomeNumero { get; set; }

        // Chave estrangeira
        public int? LocalId { get; set; }
        public Local? Local { get; set; }
    }
}
