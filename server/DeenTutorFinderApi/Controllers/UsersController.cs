using DeenTutorFinderApi.Data;
using DeenTutorFinderApi.Models.DTOs.Requests;
using DeenTutorFinderApi.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ILogger<UsersController> _logger;

    public UsersController(AppDbContext context, ILogger<UsersController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost("tutor-signup")]
    public async Task<ActionResult<User>> PostTutorUser([FromBody] TutorSignupRequest register)
    {
        _logger.LogInformation("Tutor signup request received for email: {Email}", register.Email);

        if (register.Password != register.ConfirmPassword)
        {
            _logger.LogWarning("Password mismatch for email: {Email}", register.Email);
            return BadRequest("Passwords do not match");
        }

        try
        {
            var user = new User
            {
                FullName = register.FullName,
                Email = register.Email,
                PasswordHash = register.Password, 
                IsTutor = true,// hash later hashPassowrd(register.Password)
                Tutor = new Tutor
                {
                    Name = register.FullName,
                    Email = register.Email,
                    Status = "new account"
                }
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Tutor user created successfully. UserId: {UserId}, Email: {Email}", user.Id, user.Email);
            return Ok(user);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating tutor user for email: {Email}", register.Email);
            return StatusCode(500, "An error occurred while creating the user account");
        }
    }

   [HttpPost("login")]
public async Task<ActionResult<AuthResponse>> PostUser(
    [FromBody] TutorLoginRequest loginRequest
)
{
    try
    {
        var user = await _context.Users
            .SingleOrDefaultAsync(u => u.Email == loginRequest.Email);

        if (user == null)
        {
            return Unauthorized("Invalid credentials");
        }

        // TEMP ONLY — replace with proper hashing later
        if (user.PasswordHash != loginRequest.Password)
        {
            return Unauthorized("Invalid credentials");
        }

        return Ok(new AuthResponse
        {
            AccessToken = "TEST_JWT_TOKEN",
            ExpiresAt = DateTime.UtcNow.AddHours(1),
            IsTutor = user.IsTutor
        });
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Login failed");
        return StatusCode(500, "Login failed");
    }
}


}

