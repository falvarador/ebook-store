public class BookAuthor : BaseEntity
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Surname { get; set; }

    public DateTime? Birthday { get; set; }

    public ICollection<AcademicDegree>? AcademicDegrees { get; set; }

    public string? CorrelationId { get; set; }
}
