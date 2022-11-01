public class AcademicDegree
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? School { get; set; }

    public DateTime? GradeDate { get; set; }

    public int BookAuthorId { get; set; }

    public BookAuthor? BookAuthor { get; set; }

    public string? CorrelationId { get; set; }
}
