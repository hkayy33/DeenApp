namespace DeenTutorFinderApi.Models.Entities;

public class Review
{
    public int Id { get; set; }
    public int TutorId { get; set; }  // Foreign key to Tutor
    public int UserId { get; set; }  // Foreign key to User (who wrote the review)
    public string ReviewerName { get; set; } = string.Empty;  // Could also come from User entity
    public int Rating { get; set; }  // Typically 1-5
    public string Comment { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    
    // Navigation properties
    public Tutor Tutor { get; set; } = null!;
    public User User { get; set; } = null!;  // User who wrote the review
}
