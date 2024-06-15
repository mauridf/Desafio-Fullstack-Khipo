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

        private DateTime _data;
        [Required]
        public DateTime Data
        {
            get => _data;
            set => _data = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        private TimeSpan _horario;
        [Required]
        public TimeSpan Horario
        {
            get => _horario;
            set => _horario = value;
        }

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
