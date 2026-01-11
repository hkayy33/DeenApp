public class AuthResponse
{
    public string AccessToken { get; set; } = null!;

    // optional but very useful
    public DateTime ExpiresAt { get; set; }

    public bool IsTutor {get; set;}
}
