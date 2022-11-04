public class BookAuthor : BaseEntity
{
    public BookAuthor()
    {
        Name = string.Empty;
        Surname = string.Empty;
        Birthday = DateTime.Now;
        AcademicDegrees = new HashSet<AcademicDegree>();
        CorrelationId = string.Empty;
    }

    public int Id { get; set; }

    public string Name { get; set; }

    public string Surname { get; set; }

    public DateTime Birthday { get; set; }

    public ICollection<AcademicDegree> AcademicDegrees { get; set; }

    public string CorrelationId { get; set; }
}
