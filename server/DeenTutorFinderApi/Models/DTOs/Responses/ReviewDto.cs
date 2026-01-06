namespace DeenTutorFinderApi.Models.DTOs.Responses;

public class ReviewDto
{
    public int Id { get; set; }
    public string ReviewerName { get; set; } = string.Empty;
    public int Rating { get; set; }  // Typically 1-5
    public string Comment { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }  // Or use string if ISO 8601 format (YYYY-MM-DD)
}
