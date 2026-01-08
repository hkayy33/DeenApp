namespace DeenTutorFinderApi.Models.Entities;

public class User
{
    public int Id { get; set; }
    public bool IsTutor {get; set;}
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;  // Hashed password, never store plain text
    
    // Timestamps
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    
    // Navigation properties (if users can have multiple roles)
    // Optional: If a user can also be a tutor
    public Tutor? Tutor { get; set; }
}
