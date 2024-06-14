using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using desafio_fullstack_khipo_backend.Models;
using desafio_fullstack_khipo_backend.Data;

namespace desafio_fullstack_khipo_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatracaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CatracaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Catraca/ByLocalId/5
        [HttpGet("ByLocalId/{localId}")]
        public async Task<ActionResult<IEnumerable<Catraca>>> GetCatracasByLocalId(int localId)
        {
            var catracas = await _context.Catracas
                .Where(c => c.LocalId == localId)
                .ToListAsync();

            if (catracas == null)
            {
                return NotFound();
            }

            return catracas;
        }

        // POST: api/Catraca
        [HttpPost]
        public async Task<ActionResult<Catraca>> PostCatraca(Catraca catraca)
        {
            _context.Catracas.Add(catraca);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCatraca", new { id = catraca.Id }, catraca);
        }

        // GET: api/Catraca/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Catraca>> GetCatraca(int id)
        {
            var catraca = await _context.Catracas.FindAsync(id);

            if (catraca == null)
            {
                return NotFound();
            }

            return catraca;
        }

        // PUT: api/Catraca/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCatraca(int id, Catraca catraca)
        {
            if (id != catraca.Id)
            {
                return BadRequest();
            }

            _context.Entry(catraca).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CatracaExists(id))
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

        // DELETE: api/Catraca/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCatraca(int id)
        {
            var catraca = await _context.Catracas.FindAsync(id);
            if (catraca == null)
            {
                return NotFound();
            }

            _context.Catracas.Remove(catraca);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CatracaExists(int id)
        {
            return _context.Catracas.Any(e => e.Id == id);
        }
    }
}
