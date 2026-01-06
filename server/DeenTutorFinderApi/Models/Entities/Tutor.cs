namespace DeenTutorFinderApi.Models.Entities;

public class Tutor
{
    public int Id { get; set; }
    public int UserId { get; set; }  // Foreign key to User (for authentication)
    public string Name { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Headline { get; set; } = string.Empty;
    public decimal? Price { get; set; }  // Optional - price per session
    public int Likes { get; set; }
    
    // Location (embedded - stored as columns in Tutor table)
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    
    // Contact Info (embedded - stored as columns in Tutor table)
    // Note: Email could come from User entity, but storing here for direct access
    public string PhoneNumber { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    
    // Profile details
    public string AboutMe { get; set; } = string.Empty;
    public string Subjects { get; set; } = string.Empty;  // JSON array or comma-separated, or use navigation property if normalized
    
    // Status (for tutor verification/review process)
    public string Status { get; set; } = "new account";  // e.g., "new account", "under-review", "active", "inactive"
    
    // Navigation properties
    public User User { get; set; } = null!;  // Reference to User entity
    public ICollection<Review> Reviews { get; set; } = new List<Review>();
    
    // Timestamps (optional but recommended)
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}
