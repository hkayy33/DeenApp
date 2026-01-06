using DeenTutorFinderApi.Models.DTOs.Responses;

namespace DeenTutorFinderApi.Models.DTOs.Requests;

public class TutorProfileUpdateRequest
{
    public string Name { get; set; } = string.Empty;
    public string Headline { get; set; } = string.Empty;
    public decimal? Price { get; set; }
    public Location Location { get; set; } = new();
    public List<string> Subjects { get; set; } = new();
    public string AboutMe { get; set; } = string.Empty;
    public ContactInfo ContactInfo { get; set; } = new();
    // File uploads would typically be handled separately
    // public IFormFile ProfileImage { get; set; }
    // public List<IFormFile> MediaFiles { get; set; }
}
