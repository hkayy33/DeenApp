using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DeenTutorFinderApi.Data;
using DeenTutorFinderApi.Models;
using DeenTutorFinderApi.Models.Entities;
using DeenTutorFinderApi.Models.DTOs.Requests;
using DeenTutorFinderApi.Models.DTOs.Responses;
using DeenTutorFinderApi.Helpers;
using Microsoft.Extensions.Logging;


namespace DeenTutorFinderApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TutorsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ILogger<TutorsController> _logger;

        public TutorsController(AppDbContext context, ILogger<TutorsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Tutors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tutor>>> GetTutors()
        {
            _logger.LogInformation("GET /api/tutors - Retrieving all tutors");
            try
            {
                var tutors = await _context.Tutors.ToListAsync();
                _logger.LogInformation("Retrieved {Count} tutors", tutors.Count);
                return Ok(tutors);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving tutors");
                return StatusCode(500, "An error occurred while retrieving tutors");
            }
        }

        // PUT: api/Tutors/profile
        [HttpPut("profile")]
        public async Task<IActionResult> UpdateProfile([FromBody] TutorProfileUpdateRequest profile)
        {
            _logger.LogInformation("PUT /api/tutors/profile - Profile update request received");
            var userId = 14; // TODO: replace with JWT user id

            try
            {
                var tutor = await _context.Tutors.SingleOrDefaultAsync(t => t.UserId == userId);
                if (tutor == null) {
                    _logger.LogWarning("Tutor not found for userId {UserId}", userId);
                    return NotFound("Tutor profile not found");
                }

            // Update only provided fields (null means "leave as-is")
            if (profile.Headline is not null) tutor.Headline = profile.Headline;
            if (profile.Price.HasValue) tutor.Price = profile.Price;
            if (profile.AboutMe is not null) tutor.AboutMe = profile.AboutMe;
            if (profile.ImageUrl is not null) tutor.ImageUrl = profile.ImageUrl;

            if (profile.Subjects is not null)
                tutor.Subjects = string.Join(",", profile.Subjects);

            if (profile.Location is not null)
            {
                if (profile.Location.Country is not null) tutor.Country = profile.Location.Country;
                if (profile.Location.City is not null) tutor.City = profile.Location.City;
            }

            if (profile.ContactInfo is not null)
            {
                if (profile.ContactInfo.PhoneNumber is not null) tutor.PhoneNumber = profile.ContactInfo.PhoneNumber;
                if (profile.ContactInfo.Email is not null) tutor.Email = profile.ContactInfo.Email;
            }

            if (profile.Location is not null && profile.Location.Country is not null)
            {
                string Iso = CurrencyHelper.GetCurrencySymbol(profile.Location.Country);
                tutor.CurrencySymbol = Iso;
            }

            if(profile.Status is not null && profile.Status == "Fill Profile") tutor.Status = "Review in progress";

                tutor.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();
                _logger.LogInformation("Tutor {TutorId} updated successfully", tutor.Id);

                // Return a safe response (don't return EF navigation loops)
                var subjectsList = (tutor.Subjects ?? "")
                    .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
                    .ToList();

                var response = new
                {
                    headline = tutor.Headline,
                    price = tutor.Price,
                    aboutMe = tutor.AboutMe,
                    subjects = subjectsList,
                    location = new Location
                    {
                        Country = tutor.Country ?? string.Empty,
                        City = tutor.City ?? string.Empty
                    },
                    contactInfo = new ContactInfo
                    {
                        PhoneNumber = tutor.PhoneNumber ?? string.Empty,
                        Email = tutor.Email ?? string.Empty
                    }
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating tutor profile for userId {UserId}", userId);
                return StatusCode(500, "An error occurred while updating the tutor profile");
            }
        }

        // GET: api/Tutors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TutorInitialProfileDto>> GetTutor(int id)
        {
            _logger.LogInformation("GET /api/tutors/{UserId} - Retrieving tutor", id);
            try
            {
                var tutor = await _context.Tutors.SingleOrDefaultAsync(t => t.Id == id);

                if (tutor == null)
                {
                    _logger.LogWarning("Tutor not found for id {id}", id);
                    return NotFound();
                }
                var response = new TutorInitialProfileDto
                {
                    Name = tutor.Name,
                    Email = tutor.Email
                }; 

                _logger.LogInformation("Tutor {TutorId} retrieved successfully for Id {id}", tutor.Id, id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving tutor for userId {id}", id);
                return StatusCode(500, "An error occurred while retrieving the tutor");
            }
        }



        // DELETE: api/Tutors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTutor(int id)
        {
            _logger.LogInformation("DELETE /api/tutors/{Id} - Deleting tutor", id);
            try
            {
                var tutor = await _context.Tutors.FindAsync(id);
                if (tutor == null)
                {
                    _logger.LogWarning("Tutor not found for id {Id}", id);
                    return NotFound();
                }

                _context.Tutors.Remove(tutor);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Tutor {Id} deleted successfully", id);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting tutor with id {Id}", id);
                return StatusCode(500, "An error occurred while deleting the tutor");
            }
        }

        private bool TutorExists(int id)
        {
            return _context.Tutors.Any(e => e.Id == id);
        }
    }
}