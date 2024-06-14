using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using desafio_fullstack_khipo_backend.Models;
using desafio_fullstack_khipo_backend.Data;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace desafio_fullstack_khipo_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocaisController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LocaisController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Locais
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Local>>> GetLocais()
        {
            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                WriteIndented = true // Opcional: Formatação para melhor legibilidade
            };

            var locais = await _context.Locais
                .Include(l => l.Entradas)
                .Include(l => l.Catracas)
                .ToListAsync();

            // Serializa os objetos usando os options configurados
            var jsonResult = JsonSerializer.Serialize(locais, options);

            // Retorna um ContentResult com o JSON
            return new ContentResult
            {
                ContentType = "application/json",
                Content = jsonResult,
                StatusCode = 200
            };
        }


        // GET: api/Locais/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Local>> GetLocal(int id)
        {
            var local = await _context.Locais.Include(l => l.Entradas).Include(l => l.Catracas).FirstOrDefaultAsync(l => l.Id == id);

            if (local == null)
            {
                return NotFound();
            }

            return local;
        }

        // POST: api/Locais
        [HttpPost]
        public async Task<ActionResult<Local>> PostLocal(Local local)
        {
            _context.Locais.Add(local);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLocal", new { id = local.Id }, local);
        }

        // PUT: api/Locais/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocal(int id, Local local)
        {
            if (id != local.Id)
            {
                return BadRequest();
            }

            _context.Entry(local).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocalExists(id))
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

        // DELETE: api/Locais/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocal(int id)
        {
            var local = await _context.Locais.FindAsync(id);
            if (local == null)
            {
                return NotFound();
            }

            _context.Locais.Remove(local);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LocalExists(int id)
        {
            return _context.Locais.Any(e => e.Id == id);
        }
    }
}