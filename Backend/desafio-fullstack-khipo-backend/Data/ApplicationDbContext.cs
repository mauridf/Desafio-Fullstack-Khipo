using Microsoft.EntityFrameworkCore;
using desafio_fullstack_khipo_backend.Models;

namespace desafio_fullstack_khipo_backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Local> Locais { get; set; }
        public DbSet<Entrada> Entradas { get; set; }
        public DbSet<Catraca> Catracas { get; set; }
        public DbSet<Evento> Eventos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Entrada>()
                .HasOne(e => e.Local)
                .WithMany(l => l.Entradas)
                .HasForeignKey(e => e.LocalId)
                .OnDelete(DeleteBehavior.Restrict); // Ou DeleteBehavior.Cascade se deseja deletar as entradas quando o local é deletado

            modelBuilder.Entity<Catraca>()
                .HasOne(c => c.Local)
                .WithMany(l => l.Catracas)
                .HasForeignKey(c => c.LocalId)
                .OnDelete(DeleteBehavior.Restrict); // Ou DeleteBehavior.Cascade se deseja deletar as catracas quando o local é deletado

            base.OnModelCreating(modelBuilder);
        }
    }
}
