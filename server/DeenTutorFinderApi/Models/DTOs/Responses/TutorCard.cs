namespace DeenTutorFinderApi.Models.DTOs.Responses;

public class TutorCard
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Headline { get; set; } = string.Empty;
    public decimal? Price { get; set; }
    public int Likes { get; set; }
    public Rating Rating { get; set; } = new();
    public List<ReviewDto> Reviews { get; set; } = new();
    public Location Location { get; set; } = new();
    public string Summary { get; set; } = string.Empty;
}
