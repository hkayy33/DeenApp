namespace DeenTutorFinderApi.Models.DTOs.Requests;

public class TutorSearchFilter
{
    public string TutorName { get; set; } = string.Empty;  // Search by tutor name or keywords
    public string Subject { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public double? MinRating { get; set; }  // Minimum rating filter
    public string SortOrder { get; set; } = string.Empty;  // e.g., "rating", "price", "name"
    
    // Pagination
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 10;
}
