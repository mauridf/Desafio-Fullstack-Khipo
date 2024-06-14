using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using desafio_fullstack_khipo_backend.Models;
using desafio_fullstack_khipo_backend.Data;

namespace desafio_fullstack_khipo_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntradaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EntradaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Entrada/ByLocalId/5
        [HttpGet("ByLocalId/{localId}")]
        public async Task<ActionResult<IEnumerable<Entrada>>> GetEntradasByLocalId(int localId)
        {
            var entradas = await _context.Entradas
                .Where(c => c.LocalId == localId)
                .ToListAsync();

            if (entradas == null)
            {
                return NotFound();
            }

            return entradas;
        }

        // POST: api/Entrada
        [HttpPost]
        public async Task<ActionResult<Entrada>> PostEntrada(Entrada entrada)
        {
            _context.Entradas.Add(entrada);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEntrada", new { id = entrada.Id }, entrada);
        }

        // GET: api/Entrada/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Entrada>> GetEntrada(int id)
        {
            var entrada = await _context.Entradas.FindAsync(id);

            if (entrada == null)
            {
                return NotFound();
            }

            return entrada;
        }

        // PUT: api/Entrada/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEntrada(int id, Entrada entrada)
        {
            if (id != entrada.Id)
            {
                return BadRequest();
            }

            _context.Entry(entrada).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntradaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Entrada/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntrada(int id)
        {
            var entrada = await _context.Entradas.FindAsync(id);
            if (entrada == null)
            {
                return NotFound();
            }

            _context.Entradas.Remove(entrada);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EntradaExists(int id)
        {
            return _context.Entradas.Any(e => e.Id == id);
        }
    }
}
