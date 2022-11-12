public class AcademicDegree : BaseEntity
{

    public AcademicDegree(){
        Name = string.Empty;
        School = string.Empty;
        GradeDate = DateTime.Now;
        BookAuthor = new BookAuthor();
        CorrelationId = string.Empty;

    }
    public int Id { get; set; }

    public string Name { get; set; }

    public string School { get; set; }

    public DateTime GradeDate { get; set; }

    public int BookAuthorId { get; set; }

    public BookAuthor BookAuthor { get; set; }

    public string CorrelationId { get; set; }
}
