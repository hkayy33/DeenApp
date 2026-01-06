using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DeenTutorFinderApi.Data;
using DeenTutorFinderApi.Models;
using DeenTutorFinderApi.Models.Entities;

namespace DeenTutorFinderApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TutorsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TutorsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Tutors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tutor>>> GetTutors()
        {
            return await _context.Tutors.ToListAsync();
        }

        // GET: api/Tutors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tutor>> GetTutor(int id)
        {
            var tutor = await _context.Tutors.FindAsync(id);

            if (tutor == null)
            {
                return NotFound();
            }

            return tutor;
        }

        // POST: api/Tutors
        [HttpPost]
        public async Task<ActionResult<Tutor>> PostTutor(Tutor tutor)
        {
            _context.Tutors.Add(tutor);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTutor), new { id = tutor.Id }, tutor);
        }

        // PUT: api/Tutors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTutor(int id, Tutor tutor)
        {
            if (id != tutor.Id)
            {
                return BadRequest();
            }

            _context.Entry(tutor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TutorExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        // DELETE: api/Tutors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTutor(int id)
        {
            var tutor = await _context.Tutors.FindAsync(id);
            if (tutor == null)
            {
                return NotFound();
            }

            _context.Tutors.Remove(tutor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TutorExists(int id)
        {
            return _context.Tutors.Any(e => e.Id == id);
        }
    }
}