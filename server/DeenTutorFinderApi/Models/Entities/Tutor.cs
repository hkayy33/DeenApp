namespace DeenTutorFinderApi.Models.Entities;

using System.Text.Json.Serialization;

public class Tutor
{
    public int Id { get; set; }

    // FK to User
    public int UserId { get; set; }

    public string Name { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Headline { get; set; } = string.Empty;
    public decimal? Price { get; set; }
    public int Likes { get; set; }

    // Location
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;

    public string? CurrencySymbol {get; set;} = string.Empty;

    // Contact
    public string PhoneNumber { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;

    // Profile
    public string AboutMe { get; set; } = string.Empty;
    public string Subjects { get; set; } = string.Empty;

    public string Status { get; set; } = "new account";

    // Navigation
    [JsonIgnore]
    public User User { get; set; } = null!;

    public ICollection<Review> Reviews { get; set; } = new List<Review>();

    // Timestamps
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}
