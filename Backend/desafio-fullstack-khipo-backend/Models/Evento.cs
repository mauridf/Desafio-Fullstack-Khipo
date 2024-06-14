using System.ComponentModel.DataAnnotations;

namespace desafio_fullstack_khipo_backend.Models
{
    public class Evento
    {
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public TipoEvento Tipo { get; set; }

        [Required]
        public DateTime Data { get; set; }

        [Required]
        public TimeSpan Horario { get; set; }

        [Required]
        public int? LocalId { get; set; }
        public Local? Local { get; set; }

        [Required]
        public string Email { get; set; }
        public string Telefone { get; set; }
    }

    public enum TipoEvento
    {
        Show,
        Jogo,
        Outro
    }
}
