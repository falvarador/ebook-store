

using System.ComponentModel.DataAnnotations;

public record AddOrUpdateAcademicDegreeDto
{

    public AddOrUpdateAcademicDegreeDto()
    {
        Name = string.Empty;
        School = string.Empty;
        GradeDate = DateTime.Now;
        BookCorrelationId = string.Empty;
    }

    [Required(ErrorMessage = "You should provide a name value."),
     MaxLength(50)]
    public string Name { get; set; }

    [Required(ErrorMessage = "You should provide a school value."),
     MaxLength(50)]
    public string School { get; set; }

    [Required(ErrorMessage = "You should provide a gradedate value.")]
    public DateTime GradeDate { get; set; }

    [Required(ErrorMessage = "You should provide a book author correlation"),
    MaxLength(55)]
    public string BookCorrelationId { get; set; }
}