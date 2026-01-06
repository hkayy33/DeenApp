namespace DeenTutorFinderApi.Models.DTOs.Responses;

public class TutorCardListResponse
{
    public List<TutorCard> Items { get; set; } = new();
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int Total { get; set; }
    public int TotalPages { get; set; }
}
