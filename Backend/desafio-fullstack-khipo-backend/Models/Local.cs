using System.ComponentModel.DataAnnotations;

namespace desafio_fullstack_khipo_backend.Models
{
    public class Local
    {
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }
        public string Apelido { get; set; }

        [Required]
        public TipoLocal Tipo { get; set; }
        public string CNPJ { get; set; }

        [Required]
        public string Cidade { get; set; }

        [Required]
        public string Estado { get; set; }

        [Required]
        public string CEP { get; set; }

        [Required]
        public string Endereco { get; set; }
        public string Complemento { get; set; }

        [Required]
        public string Email { get; set; }
        public string Telefone { get; set; }

        // Propriedades de navegação
        public List<Entrada>? Entradas { get; set; }
        public List<Catraca>? Catracas { get; set; }
    }

    public enum TipoLocal
    {
        Estadio,
        Teatro,
        Outro
    }
}
